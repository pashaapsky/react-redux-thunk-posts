import {ADD_POST, IPost, PostActionTypes} from "./types";

export const addPost = (post: IPost): PostActionTypes => {
    return {
        type: ADD_POST,
        payload: post
    }
};