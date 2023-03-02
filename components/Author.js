import React from "react";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import Image from "next/image";

const Author = ({ author }) => {
    const authorPlaceholderImageURL = generateCustomPlaceholderURL(30, 30, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-lightviolet bg-opacity-40">
            <div className="absolute -top-16">
                {" "}
                <Image
                unoptimized
                    src={
                        author
                            ? author.photo.url
                            : authorPlaceholderImageURL
                    }
                    alt={author.name}
                    height={125}
                    width={125}
                    className=" rounded-full"
                />
                
            </div>
            <h3 className="text-white my-4 text-xl font-bold">
                    {author.name}
                </h3>
                <p className="text-white text-lg text-start indent-6">{author.bio}</p>
        </div>
    );
};

export default Author;
