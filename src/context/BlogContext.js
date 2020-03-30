import React, { createContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    }

    return (
        <BlogContext.Provider value={{ blogPosts: blogPosts, addBlogPost: addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;