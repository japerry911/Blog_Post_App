import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.labelStyle}>Enter New Title:</Text>
            <TextInput style={styles.inputStyle} />
            <Text style={styles.labelStyle}>Enter New Content</Text>
            <TextInput style={styles.inputStyle} />
            <Button
                title='Save Edits'
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

export default EditScreen;