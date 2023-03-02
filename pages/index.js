import Head from "next/head";
import { PostWidget, PostCard, Categories,Loading } from "../components/";
import { getCategories, getPosts } from "@/Services";
import { useState, useEffect } from "react";
import PostsFilter from "@/components/PostsFilter";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";


export const getStaticProps = async () => {
    try {
        const Data = await getPosts();
        const Data2 = await getCategories();
        return {
            props: { posts: Data,categories:Data2 },
        };
    } catch (error) {
        console.log(error.message);
    }
};

//don't forget to add props :{posts,categories} when you use getStaticProps
export default function Home({posts,categories}) {
    // const [posts, setPosts] = useState([
    //     {
    //         node: {
    //             author: {
    //                 bio: "Student / Web Developer",
    //                 id: "cle4hrgvw0f2i0aw733t4t2sj",
    //                 name: "Rayen",
    //                 photo: null,
    //             },
    //             createdAt: "2023-02-14T17:07:39.86697+00:00",
    //             slug: "how-to-feel-better",
    //             title: "How to feel better",
    //             excerpt:
    //                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //             featuredImage: {
    //                 url: "https://media.graphassets.com/kQiiaMg6Q4aFMwVQerGL",
    //             },
    //             categories: [
    //                 {
    //                     name: "Health",
    //                     slug: "health",
    //                 },
    //             ],
    //         },
    //     },
    //     {
    //         node: {
    //             author: {
    //                 bio: "Student / Web Developer",
    //                 id: "cle4hrgvw0f2i0aw733t4t2sj",
    //                 name: "Rayen",
    //                 photo: null,
    //             },
    //             createdAt: "2023-02-19T13:39:47.930689+00:00",
    //             slug: "running-for-beginners",
    //             title: "Running for Beginners",
    //             excerpt:
    //                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //             featuredImage: {
    //                 url: "https://media.graphassets.com/PlZoGOfcR9iO0J2OY2Lz",
    //             },
    //             categories: [
    //                 {
    //                     name: "Health",
    //                     slug: "health",
    //                 },
    //             ],
    //         },
    //     },
    //     {
    //         node: {
    //             author: {
    //                 bio: "Student / Web Developer",
    //                 id: "cle4hrgvw0f2i0aw733t4t2sj",
    //                 name: "Rayen",
    //                 photo: null,
    //             },
    //             createdAt: "2023-02-21T23:09:12.078159+00:00",
    //             slug: "how-to-make-your-healthy-meals-taste-good",
    //             title: "How to simply make all your healthy meals taste good",
    //             excerpt:
    //                 "Eating healthy and staying fit is not just about eating bland food. In fact, one of the easiest ways to make your meals more enjoyable is by adding different spices. Spices not only add flavor to food, but they also offer a range of health benefits. They can help you reduce inflammation, boost your metabolism, and even help you lose weight. In this blog post, we’ll explore various spices combinations from all over the world that can help you spice up any meal.",
    //             featuredImage: {
    //                 url: "https://media.graphassets.com/BKMhBXTlQoeHrPGdc2vf",
    //             },
    //             categories: [
    //                 {
    //                     name: "Food",
    //                     slug: "food",
    //                 },
    //                 {
    //                     name: "Fitness",
    //                     slug: "fitness",
    //                 },
    //             ],
    //         },
    //     },
    // ]);
    // const [categories, setCategories] = useState([
    //     {
    //         name: "Health",
    //         slug: "health",
    //     },
    //     {
    //         name: "Fitness",
    //         slug: "fitness",
    //     },
    //     {
    //         name: "Food",
    //         slug: "food",
    //     },
    // ]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const [selectedCategory, setSelectedCategory] = useState("All");

    const router = useRouter();
    if (router.isFallback){
        return <Loading/>
    }
    return (
        <>
            <Head>
                <title>FitnessCharge | Home</title>
            </Head>
            <PostsFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:divide-none">
                <div className="grid grid-cols-1 gap-4 lg:gap-16 lg:grid-cols-2 lg:col-span-8 col-span-1 border-b-2 pb-8 border-orange h-fit">
                    {selectedCategory === "All"
                        ? posts
                              .filter(
                                  (post) =>
                                      post.node.excerpt
                                          .toLowerCase()
                                          .includes(searchTerm.toLowerCase()) ||
                                      post.node.title
                                          .toLowerCase()
                                          .includes(searchTerm.toLowerCase())
                              )
                              .reverse()
                              .map((post) => (
                                  <PostCard
                                      post={post.node}
                                      key={post.node.title}
                                  />
                              ))
                        : posts
                              .filter(
                                  (post) =>
                                      post.node.excerpt
                                          .toLowerCase()
                                          .includes(searchTerm.toLowerCase()) ||
                                      post.node.title
                                          .toLowerCase()
                                          .includes(searchTerm.toLowerCase())
                              )
                              .filter((post) =>
                                  post.node.categories.some((obj) =>
                                      Object.values(obj).includes(
                                          selectedCategory
                                      )
                                  )
                              )
                              .reverse()
                              .map((post) => (
                                  <PostCard
                                      post={post.node}
                                      key={post.node.title}
                                  />
                              ))}
                </div>
                <div className="lg:col-span-4 col-span-1 px-6 h-fit">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
