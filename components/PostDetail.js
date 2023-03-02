import React from "react";
import moment from "moment";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
    const authorPlaceholderImageURL = generateCustomPlaceholderURL(30, 30, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });
    const postPlaceholderImageURL = generateCustomPlaceholderURL(800, 800, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });
    const renderers = {
        h1: ({ children }) => (
            <h1 className="mb-8 text-4xl text-gray-900 md:text-5xl lg:text-6xl ">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="mb-8 text-3xl text-gray-900 md:text-5xl lg:text-6xl">
                {children}
            </h2>
        ),
        h3: ({ children }) => <h3 className=" mb-8 text-3xl">{children}</h3>,
        h4: ({ children }) => <h4 className=" mb-4 text-2xl">{children}</h4>,
        h5: ({ children }) => <h5 className="mb-4 text-xl">{children}</h5>,
        h6: ({ children }) => <h6 className="mb-4 text-large">{children}</h6>,
        blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-4 pl-2 text-lg">
                {children}
            </blockquote>
        ),
        p: ({ children }) => (
            <p className="my-12 text-lg">{children}</p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside my-8 text-lg">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside my-8 text-lg">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="my-8 text-lg">{children}</li>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm">
                {children}
            </code>
        ),
        code_block: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm">
                {children}
            </pre>
        ),
        br:()=>(
            <br/>
        )
    };

    return (
        <div className="bg-white rounded-lg  mb-8">
            <div className="relative overflow-hidden shadow-md mb-6">
                <img
                    src={
                        post.featuredImage
                            ? post.featuredImage.url
                            : postPlaceholderImageURL
                    }
                    alt={post.title}
                    className="object-top h-full w-full rounded-t-lg"
                />
            </div>
            <div className="px-12 py-8">
                <div className="flex items-center justify-center mb-8 w-full">
                    <div className="flex items-center justify-center lg:mb-0 w-auto mr-8">
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
                        <p className="inline align-middle text-gray-700 ml-2 text-lg">
                            {post.author.name}
                        </p>
                    </div>
                    <div className="font-medium text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline mr-2 text-pink-500"
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
                        <span>
                            {moment(post.createdAt).format("MMM/DD/YYYY")}
                        </span>
                    </div>
                </div>
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <h3 className="text-xl semi-bold my-20">{post.excerpt}</h3>
                <RichText
                    content={post.content.raw.children}
                    renderers={renderers}
                />
            </div>
        </div>
    );
};

export default PostDetail;
