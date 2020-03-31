import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput 
                value={title} 
                style={styles.inputStyle} 
                onChangeText={input => setTitle(input)} 
            />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput 
                value={content} 
                style={styles.inputStyle} 
                onChangeText={input => setContent(input)} 
            />
            <Button 
                title='Save Blog Post' 
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5
    }, 
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;