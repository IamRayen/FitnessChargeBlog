import React from "react";
import { getPostDetails,getPaths } from "../../Services";
import {
    PostDetail,
    Categories,
    PostWidget,
    Author,
    Sidebar,
    Loading
} from "../../components";
import { useRouter } from "next/router";


export const getStaticProps = async ({params}) => {
        try {
            const Data = await getPostDetails(params.slug);
            return {
                props: { post: Data },
            };
        } catch (error) {
            console.log(error.message);
        }
    };

export const getStaticPaths = async()=>{
    try {
        const Data = await getPaths()
        const paths = Data.map(path=>{
            return {params:{slug:path.slug}} 
        })
        return { 
            paths,
            fallback:true
        }
    } catch (error) {
        console.log(error.message);
    }
}


const post = ({post}) => {
    const router = useRouter();
    if (router.isFallback){
        return <Loading/>
    }
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="col-span-1 lg:col-span-8 ">
                    <PostDetail post={post}/>
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="top-8">
                        <Sidebar slug={post.slug} categories={post.categories.map(category=>category.slug)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default post;

