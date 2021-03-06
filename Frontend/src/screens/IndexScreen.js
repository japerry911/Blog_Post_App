import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const blogContext = useContext(BlogContext);

    const { state, deleteBlogPost, getBlogPosts } = blogContext;

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        // Invoked only if IndexScreen instance stops showing on screen fully 
        // Prevents a memory leak
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
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
                <Feather name='plus' size={30} style={styles.headerIconStyle} />
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
    },
    headerIconStyle: {
        marginRight: 5
    }
});

export default IndexScreen;