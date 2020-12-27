import {Action} from 'redux';
import {LOAD_POSTS, IAsyncPost} from "./types";
import {ThunkAction} from "redux-thunk";
import {AsyncPostState} from "./asyncPostsReducer";


export const loadAsyncPosts = (): ThunkAction<void, AsyncPostState, unknown, Action<string>> => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();

        console.log('posts', posts);

        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
};