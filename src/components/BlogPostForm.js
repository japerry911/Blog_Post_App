import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
                onPress={() => {}}
            />
        </View>
    );
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