import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "@/Services";

const Footer = () => {
    const [categories, setCategories] = useState([
        // {
        //     name: "Health",
        //     slug: "health",
        // },
        // {
        //     name: "Fitness",
        //     slug: "fitness",
        // },
        // {
        //     name: "Food",
        //     slug: "food",
        // },
    ]);

    useEffect(() => {
        const MyFunction = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        MyFunction()
    }, []);
    return (
        <footer className="flex flex-wrap py-8 text-white mt-12  justify-around gap-16 content-center">
            <span className="my-auto text-lg text-flax">© 2023 FitnessCharge. All rights reserved. <span className="block text-center">You are welcome to link this page.</span></span>
            <div className="">
                <span className="block font-semibold pb-2">Categories:</span>
                {categories.map((el) => (
                    // <Link key={el.slug} href={`/category/${el.slug}`}>
                    <Link key={el.slug} href="/">
                        <span className="block cursor-pointer hover:scale-110 hover:text-flax duration-100 p-2">
                            {el.name}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="">
                <span className="block font-semibold pb-2">Navigation</span>
                <Link href="/about">
                    <span className=" block hover:scale-110 hover:text-flax duration-100  cursor-pointer p-1">
                        About
                    </span>
                </Link>
                <Link href="/">
                    <span className="block hover:scale-110 hover:text-flax duration-100 cursor-pointer p-1">
                        Home
                    </span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
