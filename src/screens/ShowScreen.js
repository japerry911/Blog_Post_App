import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost === undefined ? null : blogPost.title}</Text>
            <Text>{blogPost === undefined ? null : blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <FontAwesome name='edit' size={30} style={styles.headerIconStyle} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    headerIconStyle: {
        marginRight: 5
    }});

export default ShowScreen;