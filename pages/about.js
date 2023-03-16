import { Author } from "@/components";
import Head from "next/head";
import { generateCustomPlaceholderURL } from "react-placeholder-image";
import Image from "next/image";

const About = ({ author }) => {
    const authorPlaceholderImageURL = generateCustomPlaceholderURL(30, 30, {
        backgroundColor: "#E28413",
        textColor: "#ffffff",
        text: "",
    });
    return (
        <>
            <Head>
                {" "}
                <title>Fitness to Haleness | About</title>
            </Head>
            <div className="containter flex flex-col lg:mt-16 p-8 lg:p-16 relative rounded bg-lightviolet bg-opacity-40">
                {/* <div className="flex flex-wrap justify-around items-center mb-8 md:px-20 ">
                {" "}
                <Image
                    unoptimized
                    src={author ? author.photo.url : authorPlaceholderImageURL}
                    alt="Rayen"
                    height={150}
                    width={150}
                    className=" rounded-full"
                />
                
            </div> */}
                <p className="text-white text-lg md:px-20">
                    <span className="block text-xl lg:text-2xl font-semibold">Welcome to my blog FitnesstoHaleness!</span>
                    <br />
                     Hey, I am{" "}
                    <span className="font-bold">The Author</span>, a foreign student
                    in Germany.
                    <br />
                    <br />
                    I'm passionate about Fitness and I want to achieve my
                    physical peak despite the lack of Nutrition, Time, Money...
                    as a student... Certainly having a healthy lifestyle is also
                    one of my objectives.
                    <br />
                    <br />
                    I'm constantly learning and growing, and I enjoy sharing the
                    knowledge that I acquire along the way with others.
                    <br />
                    <br />
                    In this blog, I will be collecting and sharing useful
                    information on various subjects within the field, while
                    highlighting the most important details. My goal is to
                    provide you with valuable insights and practical advice that
                    can help you achieve your health and fitness goals.
                    <br />
                    In addition to this blog, I'm very interested in
                    Web-development and entrepreneurship. In fact, I built this
                    website myself.
                    <br />
                    <br />I really respect people who want to become a better
                    version of themselves and I like to make a positive impact
                    in people's lives and help others, also I am always looking
                    for new ways to sharpen my skills and my way of life.
                </p>
            </div>
        </>
    );
};

export default About;
