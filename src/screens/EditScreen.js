import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);
    const id = navigation.getParam('id');

    const blogPost = state.find(blogPost => blogPost.id === id);

    return (
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(newTitle, newContent) => {
                editBlogPost(id, newTitle, newContent, () => navigation.navigate('Show', { id }))
            }} 
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;