import {combineReducers} from 'redux';
import postReducer from "./posts/postReducer";
import asyncPostsReducer from "./async-posts/asyncPostsReducer";

export const rootReducer = combineReducers({
   postsState: postReducer,
   asyncState: asyncPostsReducer,
});

export type RootState = ReturnType<typeof rootReducer>