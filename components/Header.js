import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "@/Services";

const Header = () => {
    // const [categories, setCategories] = useState([
    //     {
    //         name: "Health",
    //         slug: "health",
    //     },
    //     {
    //         name: "Fitness",
    //         slug: "fitness",
    //     },
    //     {
    //         name: "Food",
    //         slug: "food",
    //     },
    // ]);
    // useEffect(() => {
    //     const MyFunction = async () => {
    //         try {
    //             const data = await getCategories();
    //             setCategories(data);
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     };
    //     // MyFunction()
    // }, []);

    return (
        <div className="container mb-8 mx-auto ">
            <nav className="container flex justify-between items-center py-6 lg:py-12  border-b border-orange">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Fitness<span className="font-normal">Charge</span>
                    </span>
                </Link>

                <div className="hidden md:flex flex-row-reverse gap-8 items-center">
                    {/* <div className="text-white">
                        <span className="peer group text-2xl cursor-pointer">
                            Find more about
                            <svg
                                className="inline-block ease-in-out w-6 ml-3 group-hover:rotate-[360deg] duration-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokWidth="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                        <div className="border border-orange z-20 ease-in-out delay-200 duration-300 scale-0 peer-hover:scale-100 hover:scale-100 rounded-lg w-52 absolute bg-lightviolet translate-y-5 ">
                            <ul className="flex flex-col">
                                {categories.map((el) => (
                                    <Link
                                        key={el.slug}
                                        href={`/category/${el.slug}`}
                                    >
                                        <li className="font-semibold text-flax cursor-pointer pl-6 p-4 hover:bg-violet rounded-lg shadow-sm">
                                            {el.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div> */}

                    <Link className="relative group overflow-hidden" href="/about">
                        <span className="  text-white text-2xl  cursor-pointer">
                            About
                        </span>
                        <div className="border-2 left-0 bottom-0 rounded-full absolute w-full -translate-x-full group-hover:translate-x-0 duration-300"></div>

                    </Link>
                    <Link className="relative group overflow-hidden" href="/">
                        <span
                            className=" border-orange  text-white text-2xl   cursor-pointer"
                        >
                            Home
                        </span>
                        <div className="border-2 left-0 bottom-0 rounded-full absolute w-full -translate-x-full group-hover:translate-x-0 duration-300"></div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
