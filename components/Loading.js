import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
    <div className="flex justify-center">
    <ReactLoading
        type={"bubbles"}
        color={"#E28413"}
        height={"15%"}
        width={"15%"}
    />
    </div>
)

export default Loading;
