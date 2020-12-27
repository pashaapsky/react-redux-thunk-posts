import React, {FunctionComponent} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {IAsyncPost} from "../store/async-posts/types";
import {loadAsyncPosts} from "../store/async-posts/actions";

export interface RootState {
    asyncState: {
        asyncPosts: IAsyncPost[]
    }
}

const AsyncPosts: FunctionComponent = () => {
    const asyncPosts = useSelector((state: RootState) => state.asyncState.asyncPosts);

    const dispatch = useDispatch();

    console.log('asyncPosts', asyncPosts);

    return (
        <div>
            <h1>Async Posts</h1>

            {asyncPosts.map((item, index) => (
                <div key={index}>
                    <p>{item.id}</p>
                    <p>{item.userId}</p>
                    <p>{item.title}</p>
                    <p>{item.body}</p>
                </div>
            ))}

            <button onClick={() => dispatch(loadAsyncPosts())}>Загрузить посты</button>
        </div>
    );
};

export default AsyncPosts;
