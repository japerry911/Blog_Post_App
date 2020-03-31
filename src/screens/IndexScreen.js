import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const blogContext = useContext(BlogContext);

    const { state, addBlogPost, deleteBlogPost } = blogContext;

    return (
        <View>
            <Button
                title='Add Blog Post'
                onPress={addBlogPost}
            />
            <FlatList 
                data={state}
                keyExtractor={post => post.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', { id: item.id })}
                        >
                            <View style={styles.rowStyle}>
                                <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                                <TouchableOpacity 
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <FontAwesome 
                                        name='trash-o' 
                                        style={styles.iconStyle}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Creation')}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 36
    }
});

export default IndexScreen;