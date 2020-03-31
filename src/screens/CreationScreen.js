import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const CreationScreen = () => {
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
            <Button title='Add Blog Post' />
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

export default CreationScreen;