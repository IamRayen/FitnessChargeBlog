import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "@/Services";

const Categories = () => {
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
        <div className="bg-white shadow-lg rounded p-8 mb-8">
            <h3 className="text-xl mb-8 font-semi-bold border-b pb-4">
                Categories
            </h3>
            {categories.map((el) => (
                <Link key={el.slug} href={`/category/${el.slug}`}>
                    <span className="cursor-pointer block pb-3 mb-3">
                        {el.name}
                    </span>
                </Link>
                ))}
        </div>
    );
};

export default Categories;
