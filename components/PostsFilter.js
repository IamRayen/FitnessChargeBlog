import React from "react";

const PostsFilter = ({
    categories,
    setSelectedCategory,
    selectedCategory,
    searchTerm,
    handleSearchTermChange,
}) => {
    return (
        <div className="  flex flex-wrap md:justify-around justify-start gap-y-8 gap-x-4 p-4 my-12">
            <div className="flex flex-wrap  gap-x-4 gap-y-2 items-center">
                <div className="text-xl  font-semibold text-white">
                    Filter by <span className="text-orange">Categories</span>:{" "}
                </div>
                <div className="flex  gap-3 flex-wrap">
                    <button
                        key="All"
                        onClick={() => {
                            setSelectedCategory("All");
                        }}
                        className={`hover:scale-110 hover:bg-orange ${
                            selectedCategory == "All"
                                ? "bg-orange scale-110"
                                : "bg-lightviolet "
                        }  ease-in-out duration-200 text-lg px-4 font-semibold text-white cursor-pointer rounded-full p-2  `}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => {
                                setSelectedCategory(category.name);
                            }}
                            className={`hover:scale-110 hover:bg-orange ${
                                selectedCategory == category.name
                                    ? "bg-orange scale-110"
                                    : "bg-lightviolet "
                            }  ease-in-out duration-200 text-lg px-4 font-semibold text-white cursor-pointer rounded-full p-2  `}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* <div className="flex   flex-wrap  items-center gap-x-4 gap-y-2 text-xl font-semibold text-lightviolet ">
                <div className=" text-white">
                    <span className="text-orange">OrderBy</span>:
                </div>
                <div className="flex flex-wrap gap-3">
                    <span className="hover:scale-110 ease-in-out duration-200 bg-lightviolet text-white text-lg rounded-full px-4 p-2 cursor-pointer hover:bg-orange">
                        Publishing Date
                    </span>
                    <span className=" hover:scale-110 ease-in-out duration-200 bg-lightviolet text-white text-lg rounded-full px-4 p-2 cursor-pointer hover:bg-orange">
                        Popularity
                    </span>
                </div>
            </div> */}
            <div className="flex flex-row-reverse">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    className="peer w-full sm:w-72 outline-none px-4 leading-5 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out border-2 border-lightviolet rounded-r-lg appearance-none  focus:shadow-outline-orange focus:border-orange sm:text-sm sm:leading-5"
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-11 h-11 font-semibold text-white cursor-pointer peer-focus:bg-orange rounded-l-full p-2 bg-lightviolet ease-in-out duration-200"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default PostsFilter;
