import createDataContext from './createDataContext';
import railsServer from '../api/railsServer';
import axios from 'axios';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blog_post':
            return state.filter(post => post.id !== action.payload);
        
        case 'edit_blog_post':
            return state.map(post => post.id === action.payload.id ? action.payload : post);

        case 'get_blog_posts':
            return action.payload;

        case 'create_blog_post':
            return [...state, { id: action.payload.id, title: action.payload.title, content: action.payload.content }];

        default:
            return state;
    }
};

const createBlogPost = dispatch => {
    return async (title, content, callback) => {
        const response = await railsServer.post('/blogposts', {  title, content });
        dispatch({ action: 'create_blog_post', payload: response.data });
        callback();
    };
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await railsServer.get('/blogposts');
        dispatch({ type: 'get_blog_posts', payload: response.data });
    };  
};

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({ type: 'delete_blog_post', payload: id })
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blog_post', payload: { id, title, content }});
        callback();
    }
};

export const { Context, Provider } = createDataContext(blogReducer, { deleteBlogPost, editBlogPost, getBlogPosts, createBlogPost }, 
    [{ title: 'Test Blog Post Title', content: 'Test Blog Post Content', id: '0' }]);