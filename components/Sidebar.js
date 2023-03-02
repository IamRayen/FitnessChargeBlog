import React from "react";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import Image from "next/image";
import Link from "next/link";
import PostWidget from "./PostWidget";
import Categories from "./Categories";

const Sidebar = ({slug,categories}) => {
  const authorPlaceholderImageURL = generateCustomPlaceholderURL(30, 30, {
    backgroundColor: "#E28413",
    textColor: "#ffffff",
    text: "",
});

    return (
        <div className="border-b-2 border-orange">
            <PostWidget slug={slug} categories={categories} />
            <Categories />
            <div className="containter flex flex-col mb-8 p-12 relative rounded-lg bg-lightviolet bg-opacity-40">
                <div className="flex flex-wrap justify-around items-center mb-4 ">
                    {" "}
                    {/* <Image
                        unoptimized
                        src={authorPlaceholderImageURL}
                        alt="Rayen"
                        height={100}
                        width={100}
                        className=" rounded-full mb-4"
                    /> */}
                    <h3 className="text-white text-4xl font-bold text-orange px-8">
                        Author
                    </h3>
                </div>
                <p className="text-white text-lg">
                    Hey, i am Rayen, a foreign student in Germany.
                   
                    I'm passionate about Fitness and I want to achieve my
                    physical peak despite the lack of Nutrition, Time, Money...
                    as a student... 
                </p>
                <Link href="/about" className="text-gray-400"><span>Read more...</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
