import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { getFeaturedPosts, getSimilarPosts } from "../Services";

const PostWidget = ({ categories, slug }) => {
    const [widgetPosts, setWidgetPosts] = useState([
        // {
        //     createdAt: "2023-02-14T17:07:39.86697+00:00",
        //     slug: "how-to-feel-better",
        //     title: "How to feel better",
        //     featuredImage: {
        //         url: "https://media.graphassets.com/kQiiaMg6Q4aFMwVQerGL",
        //     },
        // },
        // {
        //     createdAt: "2023-02-19T13:39:47.930689+00:00",
        //     slug: "running-for-beginners",
        //     title: "Running for Beginners",
        //     featuredImage: {
        //         url: "https://media.graphassets.com/PlZoGOfcR9iO0J2OY2Lz",
        //     },
        // },
        // {
        //     createdAt: "2023-02-21T23:09:12.078159+00:00",
        //     slug: "how-to-make-your-healthy-meals-taste-good",
        //     title: "How to make your healthy meals taste good",
        //     featuredImage: {
        //         url: "https://media.graphassets.com/BKMhBXTlQoeHrPGdc2vf",
        //     },
        // },
    ]);
    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((res) => {
                setWidgetPosts(res);
            });
        } else {
            getFeaturedPosts().then((res) => {
                setWidgetPosts(res);
            });
        }
    }, []);
    return (
        <div className="bg-white relative shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semi-bold border-b pb-4">
                {slug ? "Similar Posts:" : "Featured Posts:"}
            </h3>
            
            {widgetPosts.reverse().map((post) => (
                <div
                    key={post.title}
                    className="flex  items-center w-full mb-4"
                >
                    <div className="w-16 flex-none">
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            height="80px"
                            width="80px"
                            className="align-middle rounded-full"
                        />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className="text-grey-500 font-xs">
                            {moment(post.createdAt).format("MMM DD, YYYY")}
                        </p>
                        <Link href={`/post/${post.slug}`} className="text-md">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostWidget;
