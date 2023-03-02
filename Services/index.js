import { request, gql } from "graphql-request";
const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            id
                            name
                            
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
};

export const getPaths = async()=>{
    const query = gql`
    query GetPaths{
        posts {
            slug
          }
    }
    `
    const result = await request(graphqlAPI,query)
    return result.posts
}

export const getFeaturedPosts = async () => {
    const query = gql`
        query MyQuery {
            posts(where:{featuredPost:true}) {
                createdAt
                slug
                title
                featuredImage {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.posts;
};

export const getSimilarPosts = async (categories,slug) => {
    const query = gql`
    query GetPostDetails($slug:String!,$categories:[String!]){
        posts(
                where:{slug_not:$slug, AND: {categories_some:{slug_in:$categories}}}
                last:3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
    }
    `;
    const result = await request(graphqlAPI, query,{categories,slug});
    return result.posts;
};

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                name
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.categories;
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug:String!) {
            post(where:{slug:$slug}){
                        author {
                            bio
                            id
                            name
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                        content{
                            raw
                        }
                    }
                }
            `;

    const result = await request(graphqlAPI, query,{slug});
    return result.post;
};
