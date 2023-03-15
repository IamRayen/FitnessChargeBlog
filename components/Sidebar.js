import React from "react";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import Image from "next/image";
import Link from "next/link";
import PostWidget from "./PostWidget";
// import Categories from "./Categories";

const Sidebar = ({ slug, categories }) => {
    const authorPlaceholderImageURL = generateCustomPlaceholderURL(30, 30, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });

    return (
        <div className="border-b-2 sm:px-8 md:px-24 lg:px-0 border-orange">
            <PostWidget slug={slug} categories={categories} />
            {/* <Categories /> */}
            <div className="mb-8 p-4 lg:p-8 bg-orange bg-opacity-90 rounded">
                <span className="text-lg lg:text-2xl mb-2 lg:mb-4 block font-semibold">Disclosure</span> 
                Some of the links on this website are affiliate
                links, which means that I may earn a commission if you click on
                the link or make a purchase using the link.<br/><br /> When you make a
                purchase, the price you pay will be the same whether you use the
                affiliate link or go directly to the vendor's website using a
                non-affiliate link.<br/><br /> By using the affiliate links, you are
                helping support the <span className="font-semibold">FitnesstoHaleness</span> website, and I genuinely
                appreciate your support.
            </div>
            <div className="flex flex-col mb-8 p-4 lg:p-8 relative rounded bg-lightviolet bg-opacity-40">
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
                <p className="text-white text-base sm:text-lg">
                    Hey, i am Rayen, a foreign student in Germany. I'm
                    passionate about Fitness and I want to achieve my physical
                    peak despite the lack of Nutrition, Time, Money... as a
                    student...
                </p>
                <Link href="/about" className="text-gray-400">
                    <span>Read more...</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
