import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const IndexScreen = () => {
    const blogContext = useContext(BlogContext);

    const { state, addBlogPost } = blogContext;

    return (
        <View>
            <Button
                title='Add Blog Post'
                onPress={addBlogPost}
            />
            <FlatList 
                data={state}
                keyExtractor={post => post.title}
                renderItem={({ item }) => {
                return (
                    <View style={styles.rowStyle}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                        <FontAwesome 
                            name='trash' 
                            style={styles.iconStyle}
                        />
                    </View>
                );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    }
});

export default IndexScreen;