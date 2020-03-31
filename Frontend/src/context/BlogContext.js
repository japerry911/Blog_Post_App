import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [...state, {
                id: Math.floor(Math.random() * 99999).toString(), 
                title: action.payload.title,
                content: action.payload.content 
            }];
        
        case 'delete_blog_post':
            return state.filter(post => post.id !== action.payload);
        
        case 'edit_blog_post':
            return state.map(post => post.id === action.payload.id ? action.payload : post);

        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blog_post', payload: { title, content }});
        callback();
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

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, 
    [{ title: 'Test Blog Post Title', content: 'Test Blog Post Content', id: '2304924' }]);