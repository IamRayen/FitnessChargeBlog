import React from "react";
import moment from "moment";
import Link from "next/link";
import { generateCustomPlaceholderURL } from "react-placeholder-image";

const PostCard = ({ post }) => {
    const authorPlaceholderImageURL = generateCustomPlaceholderURL(25, 25, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });
    const postPlaceholderImageURL = generateCustomPlaceholderURL(800, 800, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });


    return (
        <div className="container bg-gray-200 h-fit pb-6 p-2 rounded">
            <div className="relative overflow-hidden pb-56 mb-6">
                {" "}
                <img
                    src={post.featuredImage? post.featuredImage.url : postPlaceholderImageURL}
                    alt={post.title}
                    className="object-top absolute h-60 p-2 w-full object-cover shadow-lg rounded-xl"
                />
            </div>
            <h1 className="transition duration-700 text-center mb-6 cursor-pointer text-lightviolet hover:text-violet text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-6 w-full ">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img
                        src={
                            post.author.photo
                                ? post.author.photo.url
                                : authorPlaceholderImageURL
                        }
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full mr-1"
                    />
                    <p className="inline align-middle text-gray-800 ml-2 text-md">
                        {post.author.name}
                    </p>
                </div>
                <div className="font-medium text-gray-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline mr-2 text-orange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <span>{moment(post.createdAt).format("MMM/DD/YYYY")}</span>
                </div>
            </div>
            <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-orange text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                        Continue reading...
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
