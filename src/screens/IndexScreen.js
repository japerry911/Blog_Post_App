import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
    const blogContext = useContext(BlogContext);

    const { state, addBlogPost } = blogContext;

    return (
        <View>
            <Text>Index Screen!</Text>
            <Button
                title='Add Blog Post'
                onPress={addBlogPost}
            />
            <FlatList 
                data={state}
                keyExtractor={post => post.title}
                renderItem={({ item }) => {
                return (
                    <Text>{item.title}</Text>
                );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;