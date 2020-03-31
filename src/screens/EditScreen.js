import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(newTitle, newContent) => {
                console.log(newTitle, '|||', newContent);
            }} 
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;