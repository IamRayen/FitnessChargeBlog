import React from "react";
import Link from "next/link";
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
            <h1 className="my-8 lg:my-16 text-4xl md:text-5xl lg:text-6xl ">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="my-8 lg:my-16 text-3xl md:text-4xl lg:text-5xl">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className=" my-8 lg:my-16 text-2xl md:text-3xl lg:text-4xl">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className=" my-8 lg:my-16 text-xl md:text-2xl lg:text-3xl">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="my-8 lg:my-16 text-lg md:text-xl lg:text-2xl">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="my-8 lg:my-16 text-base md:text-lg lg:text-xl">
                {children}
            </h6>
        ),
        blockquote: ({ children }) => (
            <blockquote className="my-8 lg:my-16 border-l-4 pl-2 text-lg">
                {children}
            </blockquote>
        ),
        p: ({ children }) => (
            <p className="my-4 lg:my-8 text-base tracking-wide lg:text-lg">
                {children}
            </p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside my-4 lg:my-8">{children}</ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside my-4 lg:my-8 indent-4">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="my-4 lg:my-8 text-base lg:text-lg">{children}</li>
        ),
        code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-base my-4 lg:my-8">
                {children}
            </code>
        ),
        code_block: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-base my-4 lg:my-8">
                {children}
            </pre>
        ),
        img: ({ children }) => (
            <img
                alt={children.props.parent.alt}
                src={children.props.parent.src}
                className="my-2 w-auto mx-auto my-8 h-80 rounded-lg"
            />
        ),
        a: ({ children }) => (
            <Link
                target="_blank"
                className="bg-orange text-white font-semibold flex items-center mx-auto w-fit py-2 px-8 my-8 scale-90 hover:scale-100 rounded-full shadow-none transition duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                href={children.props.parent.href}
            >
                {children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 ml-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
            </Link>
        ),
    };

    return (
        <div className="bg-white rounded-lg pb-4">
            <div className="relative overflow-hidden shadow-md">
                <img
                    src={
                        post.featuredImage
                            ? post.featuredImage.url
                            : postPlaceholderImageURL
                    }
                    alt={post.title}
                    className="object-cover object-center object-contain max-h-96 w-full rounded-t-lg"
                />
            </div>
            <div className="px-4 md:px-4 xl:px-8 my-4 lg:my-8">
                <div className="flex items-center justify-center w-full my-4 lg:my-8">
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
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold my-8 lg:my-16">
                    {post.title}
                </h1>
                <h3 className="text-lg lg:text-xl semi-bold my-8 lg:my-16">
                    {post.excerpt}
                </h3>
                <RichText
                    content={post.content.raw.children}
                    renderers={renderers}
                />
            </div>
        </div>
    );
};

export default PostDetail;
