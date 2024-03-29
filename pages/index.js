import Head from "next/head";
import { PostWidget, PostCard, Loading } from "../components/";
import { getCategories, getPosts } from "@/Services";
import { useState, useEffect } from "react";
import PostsFilter from "@/components/PostsFilter";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
    try {
        const Data = await getPosts();
        const Data2 = await getCategories();
        return {
            props: { posts: Data, categories: Data2 },
        };
    } catch (error) {
        console.log(error.message);
    }
};

//don't forget to add props :{posts,categories} when you use getStaticProps
export default function Home({ posts, categories }) {
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
    if (router.isFallback) {
        return <Loading />;
    }
    return (
        <>
            <Head>
                <title>Fitness to Haleness | Home</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
                <meta
                    name="google-site-verification"
                    content="zttkW-5u1UWFmEXqVD2VgM-MpTEDmSLfOWqZ9mAvJew"
                />
                <meta
                    name="description"
                    content="Get the latest insights and information on fitness and wellness with our informative blog. We cover a wide range of topics, from nutrition and workouts to mental health and motivation. Whether you're a seasoned fitness enthusiast or just starting your journey, our blog has something for everyone. Stay informed and inspired with our comprehensive guide to fitness and wellness."
                />
            </Head>
            <PostsFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                handleSearchTermChange={handleSearchTermChange}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:divide-none">
                <div className="grid grid-cols-1 gap-4 xl:gap-8 lg:grid-cols-1 xl:grid-cols-2 lg:col-span-8 col-span-1 border-b-2 pb-4 border-orange h-fit mx-auto lg:mx-4">
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
                <div className="lg:col-span-4 col-span-1 lg:px-4 xl:px-8 h-fit">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
