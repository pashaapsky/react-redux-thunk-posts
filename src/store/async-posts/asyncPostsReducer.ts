import {AsyncPostsActionTypes, IAsyncPost, LOAD_POSTS} from "./types";

export interface AsyncPostState {
    asyncPosts : IAsyncPost[]
}

const initialState : AsyncPostState = {
    asyncPosts: [
        {
            userId : 1,
            id: 1,
            title: 'title',
            body: 'body'
        }
    ]
};

const asyncPostsReducer = (state = initialState, action: AsyncPostsActionTypes): AsyncPostState => {
    console.log('action catch', action.type);

    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                asyncPosts: [...state.asyncPosts, ...action.payload]
            };

        default:
            return state
    }
};

export default asyncPostsReducer;
