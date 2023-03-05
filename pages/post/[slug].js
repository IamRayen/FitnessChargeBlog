import React from "react";
import { useEffect } from "react";
import { getPostDetails, getPaths } from "../../Services";
import {
    PostDetail,
    Categories,
    PostWidget,
    Author,
    Sidebar,
    Loading,
} from "../../components";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ params }) => {
    try {
        const Data = await getPostDetails(params.slug);
        return {
            props: { post: Data },
        };
    } catch (error) {
        console.log(error.message);
    }
};

export const getStaticPaths = async()=>{
    try {
        const Data = await getPaths()
        const paths = Data.map(path=>{
            return {params:{slug:path.slug}}
        })
        return {
            paths,
            fallback:true
        }
    } catch (error) {
        console.log(error.message);
    }
}

const post = ({post}) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loading />;
    }
    const hh = {
        author: {
            bio: "Hey, i am Rayen, a foreign student in Germany.\n\nI'm passionate about Fitness and I want to achieve my physical peak despite the lack of Nutrition, Time, Money... as a student... \nI'm constantly learning and growing, and I enjoy sharing my knowledge, that I acquire along the way, with others.\n\nIn addition to this blog, I'm very interested in Web-development and entrepreneurship. In fact, I built this website myself.\n\nI really respect people who want to become a better version of themselves and I like to make a positive impact in people's lives and help others, also I am always looking for new ways to sharpen my skills and my way of life.",
            id: "cle4hrgvw0f2i0aw733t4t2sj",
            name: "Rayen ",
        },
        createdAt: "2023-02-21T23:09:12.078159+00:00",
        slug: "how-to-season-healthy-food-on-a-budget",
        title: "how to season healthy food on a budget",
        excerpt:
            "Eating healthy and staying fit is not just about eating bland food. In fact, one of the easiest ways to make your meals more enjoyable is by adding different spices. Seasonings not only add flavor to food, but they also offer a range of health benefits. They can help you reduce inflammation, boost your metabolism, and even help you lose weight. In this blog post, we’ll explore various spices combinations from all over the world that can help you spice up any meal.",
        featuredImage: {
            url: "https://media.graphassets.com/BKMhBXTlQoeHrPGdc2vf",
        },
        categories: [
            {
                name: "Nutrition",
                slug: "nutrition",
            },
        ],
        content: {
            raw: {
                children: [
                    {
                        type: "heading-three",
                        children: [
                            {
                                bold: true,
                                text: "Spices list",
                            },
                        ],
                    },
                    {
                        type: "heading-six",
                        children: [
                            {
                                bold: true,
                                text: "How to make mixed spices at home?",
                            },
                        ],
                    },
                    {
                        type: "numbered-list",
                        children: [
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Indian Spice Blend",
                                            },
                                            {
                                                text: "\nIndian spices are some of the most flavorful and aromatic spices in the world. The Indian spice blend or garam masala is a mixture of different spices, including cinnamon, cumin, coriander, cardamom, black pepper, and cloves. This blend is used in a variety of Indian dishes, such as curries, stews, and soups. You can make your own garam masala blend by toasting the whole spices and grinding them together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Mexican Spice Blend",
                                            },
                                            {
                                                text: "\nMexican cuisine is known for its bold and spicy flavors. The Mexican spice blend or adobo is a mixture of dried chilies, garlic, cumin, oregano, and vinegar. This blend is used in a variety of Mexican dishes, such as enchiladas, tacos, and fajitas. You can make your own adobo blend by toasting the chilies and grinding them with the other spices.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Chinese Five-Spice Blend",
                                            },
                                            {
                                                text: "\nChinese cuisine is known for its balance of sweet, sour, salty, and bitter flavors. The Chinese five-spice blend is a mixture of cinnamon, fennel seeds, cloves, star anise, and Szechuan peppercorns. This blend is used in a variety of Chinese dishes, such as stir-fries, soups, and marinades. You can make your own five-spice blend by toasting the whole spices and grinding them together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Italian Spice Blend",
                                            },
                                            {
                                                text: "\nItalian cuisine is known for its simplicity and freshness. The Italian spice blend or seasoning is a mixture of dried basil, oregano, thyme, rosemary, and garlic powder. This blend is used in a variety of Italian dishes, such as pasta sauces, pizzas, and roasted vegetables. You can make your own Italian seasoning blend by mixing the dried herbs and garlic powder together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Moroccan Spice Blend",
                                            },
                                            {
                                                text: "\nMoroccan cuisine is known for its bold and complex flavors. The Moroccan spice blend or ras el hanout is a mixture of over 20 different spices, including cumin, coriander, cinnamon, cardamom, ginger, and turmeric. This blend is used in a variety of Moroccan dishes, such as tagines, couscous, and grilled meats. You can make your own ras el hanout blend by toasting the whole spices and grinding them together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Jamaican Spice Blend",
                                            },
                                            {
                                                text: "\nJamaican cuisine is known for its bold and spicy flavors. The Jamaican spice blend or jerk seasoning is a mixture of dried thyme, allspice, cinnamon, nutmeg, and cayenne pepper. This blend is used in a variety of Jamaican dishes, such as jerk chicken, pork, and fish. You can make your own jerk seasoning blend by mixing the dried spices together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Greek Spice Blend",
                                            },
                                            {
                                                text: "\nGreek cuisine is known for its fresh and bright flavors. The Greek spice blend or seasoning is a mixture of dried oregano, thyme, and rosemary, and garlic powder. This blend is used in a variety of Greek dishes, such as souvlaki, gyros, and salads. You can make your own Greek seasoning blend by mixing the dried herbs and garlic powder together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Cajun Spice Blend",
                                            },
                                            {
                                                text: "\nCajun cuisine is known for its bold and spicy flavors. It's a mixture of dried thyme, oregano, paprika, cayenne pepper, and garlic powder. This blend is used in a variety of Cajun dishes, such as gumbo, jambalaya, and blackened fish. You can make your own Cajun seasoning blend by mixing the dried spices together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Ethiopian Spice Blend",
                                            },
                                            {
                                                text: "\nEthiopian cuisine is known for its unique and spicy flavors. The Ethiopian spice blend or berbere is a mixture of dried chili peppers, ginger, garlic, fenugreek, and other spices. This blend is used in a variety of Ethiopian dishes, such as stews, soups, and roasted meats. You can make your own berbere blend by toasting the whole spices and grinding them together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                bold: true,
                                                text: "Caribbean Spice Blend",
                                            },
                                            {
                                                text: "\nCaribbean cuisine is known for its bold and spicy flavors. The Caribbean spice blend or curry powder is a mixture of dried turmeric, coriander, cumin, and other spices. This blend is used in a variety of Caribbean dishes, such as curries, stews, and soups. You can make your own curry powder blend by mixing the dried spices together.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "block-quote",
                        children: [
                            {
                                text: "Additionally, many of these spice blends have health benefits of their own. For example, cinnamon, which is a common ingredient in many of these blends, has been shown to have anti-inflammatory and blood sugar-regulating properties.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "heading-three",
                        children: [
                            {
                                bold: true,
                                text: "Storage",
                            },
                        ],
                    },
                    {
                        type: "heading-six",
                        children: [
                            {
                                bold: true,
                                text: "How to store spices long term?",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "Storing your spice blends properly is essential to ensure that they retain their flavor and aroma for as long as possible. Here are some tips for storing spice blends:",
                            },
                        ],
                    },
                    {
                        type: "numbered-list",
                        children: [
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use airtight containers",
                                                underline: true,
                                            },
                                            {
                                                text: ": Air, moisture, and light can all affect the flavor and potency of spices. Store your spice blends in airtight containers to prevent air and moisture from getting in. Glass jars with tight-fitting lids work well.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "numbered-list",
                        children: [
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Keep them in a cool, dark place",
                                                underline: true,
                                            },
                                            {
                                                text: ": Heat and light can also affect the quality of spices. Store your spice blends in a cool, dark place, such as a pantry or cupboard, away from heat sources like the stove or oven.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Label the containers",
                                                underline: true,
                                            },
                                            {
                                                text: ": Be sure to label the containers with the name of the spice blend and the date it was made. This will help you keep track of how long the blend has been stored and when it might be time to replace it.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use small containers",
                                                underline: true,
                                            },
                                            {
                                                text: ": It's best to store spice blends in small containers so that you can use them up within a reasonable amount of time. Spices lose their potency over time, so it's best to use them within six months to a year.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Consider storing in the freezer",
                                                underline: true,
                                            },
                                            {
                                                text: ": If you live in a humid climate or plan on storing your spice blends for longer than six months, consider storing them in the freezer. Freezing can help preserve the flavor and aroma of spices. Just be sure to use freezer-safe containers.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "By following these tips, you can ensure that your spice blends last longer and remain fresh and flavorful. This way, you can easily access them anytime you want to add a kick of flavor to your meals.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "Check out this airtight container product:",
                            },
                        ],
                    },
                    {
                        type: "class",
                        children: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        bold: true,
                                        text: "Best and cheapest airtight containers:",
                                        italic: true,
                                    },
                                    {
                                        text: " ",
                                    },
                                    {
                                        href: "https://amzn.to/3L2d8TD",
                                        type: "link",
                                        title: "Airtight container Amazon",
                                        children: [
                                            {
                                                text: "Click here",
                                            },
                                        ],
                                        openInNewTab: true,
                                    },
                                    {
                                        text: "",
                                    },
                                ],
                            },
                        ],
                        className: "product_link",
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "heading-three",
                        children: [
                            {
                                bold: true,
                                text: "Incorporation",
                            },
                        ],
                    },
                    {
                        type: "heading-six",
                        children: [
                            {
                                bold: true,
                                text: "How to add spices to food?",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "Now that you have learned about different spice blends from around the world,",
                            },
                            {
                                bold: true,
                                text: " it’s time to start incorporating them into your meals.",
                            },
                            {
                                text: " Here are some tips on how to use spices to spice up your meals:",
                            },
                        ],
                    },
                    {
                        type: "bulleted-list",
                        children: [
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "     Use them in marinades: Adding spices to your marinades is a great way to infuse flavor into your meat or vegetables before cooking them. Try using the Mexican adobo blend for chicken or the Jamaican jerk seasoning for pork.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use them in rubs: Using spice rubs is a great way to add flavor to your meats before grilling or roasting them. Try using the Moroccan ras el hanout blend for lamb or the Cajun spice blend for shrimp.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use them in dressings: Spices can be used to add flavor to your dressings for salads or dipping sauces. Try using the Greek seasoning blend for a homemade tzatziki sauce or the Italian seasoning blend for a balsamic vinaigrette.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use them in soups and stews: Adding spices to your soups and stews can add depth and complexity to the flavors. Try using the Indian garam masala blend for lentil soup or the Ethiopian berbere blend for a spicy vegetable stew.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use them in roasted vegetables: Roasting vegetables is a great way to bring out their natural sweetness, but adding spices can take them to the next level. Try using the Italian seasoning blend for roasted potatoes or the Chinese five-spice blend for roasted carrots.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "list-item",
                                children: [
                                    {
                                        type: "list-item-child",
                                        children: [
                                            {
                                                text: "Use them in rice and grains: Adding spices to your rice and grains can make them more flavorful and interesting. Try using the Caribbean curry powder blend for rice or the Moroccan ras el hanout blend for couscous.",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "heading-three",
                        children: [
                            {
                                bold: true,
                                text: "Healthy food Recipes",
                            },
                        ],
                    },
                    {
                        type: "heading-six",
                        children: [
                            {
                                bold: true,
                                text: "Best healthy food to eat:",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "As we all know, there are some foods that are great for our health, but not so great in the taste department. Luckily, there are spice blends that can help elevate the flavor of these foods and make them more enjoyable. ",
                            },
                            {
                                bold: true,
                                text: "Here are some healthy food that can benefit from the addition of spices:",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                bold: true,
                                text: "Broccoli",
                                underline: true,
                            },
                            {
                                text: "\nBroccoli is a nutrient-dense vegetable that is low in calories and high in fiber, vitamins, and minerals. However, many people find its taste to be bitter and unpleasant. The Italian seasoning blend, which is a mix of dried basil, oregano, rosemary, and thyme, can add a savory flavor to broccoli and make it more enjoyable.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                bold: true,
                                text: "Brussels Sprouts",
                                underline: true,
                            },
                            {
                                text: "\nBrussels sprouts are another nutrient-dense vegetable that is high in fiber, vitamin C, and other antioxidants. However, their bitter taste can be off-putting to some. The Moroccan ras el hanout blend, which includes warm spices such as cinnamon, cumin, and ginger, can add a sweet and earthy flavor to Brussels sprouts and help balance out their bitterness.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                bold: true,
                                text: "Tofu",
                                underline: true,
                            },
                            {
                                text: "\nTofu is a versatile and protein-packed ingredient that is often used in vegetarian and vegan dishes. However, its bland taste and spongy texture can be unappealing to some. The Chinese five-spice blend, which includes cinnamon, cloves, fennel, star anise, and Szechuan peppercorns, can add a complex and savory flavor to tofu and make it more interesting.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                bold: true,
                                text: "Quinoa",
                                underline: true,
                            },
                            {
                                text: "\nQuinoa is a gluten-free grain that is high in protein, fiber, and various minerals. However, its nutty taste can be too mild for some people. The Mexican adobo blend, which includes cumin, garlic, and smoked paprika, can add a spicy and smoky flavor to quinoa and make it more flavorful.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                bold: true,
                                text: "Lentils",
                                underline: true,
                            },
                            {
                                text: "\nLentils are a great source of plant-based protein and fiber, but their earthy taste can be unappetizing to some. The Indian garam masala blend, which includes warm spices such as cinnamon, cardamom, and cumin, can add a rich and aromatic flavor to lentils and make them more satisfying.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "heading-three",
                        children: [
                            {
                                bold: true,
                                text: "Conclusion",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "Incorporating a variety of spices into your meals is not only a way to make them more enjoyable, but also a way to enhance their nutritional value. By using the spice blends mentioned above, you can add flavor to healthy foods that may not taste great on their own and make them a regular part of your diet.",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                    {
                        type: "paragraph",
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                ],
            },
        },
    };

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="col-span-1 lg:col-span-8 ">
                    <PostDetail post={post} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="top-8">
                        <Sidebar
                            slug={post.slug}
                            categories={post.categories.map(
                                (category) => category.slug
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default post;
