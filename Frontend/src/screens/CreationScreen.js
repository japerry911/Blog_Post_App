import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreationScreen = ({ navigation }) => {
    const { createBlogPost } = useContext(BlogContext);

    return (
        <BlogPostForm 
            onSubmit={(title, content) => createBlogPost(title, content, () => navigation.navigate('Index'))} 
        />
    );
};

const styles = StyleSheet.create({});

export default CreationScreen;