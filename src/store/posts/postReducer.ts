import {ADD_POST, IPost, PostActionTypes} from "./types";

export interface PostState {
    posts: IPost[]
}

const initialState: PostState = {
    posts: []
};

const postReducer = (state = initialState, action: PostActionTypes): PostState => {
    console.log('action catch', action.type);

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };

        default :
            return state
    }

};

export default postReducer;


