import React, {FC} from 'react';
import Post from './Post';
import {connect, useSelector} from 'react-redux';
import {IPost} from "../store/posts/types";

interface RootState {
    postsState: {
        posts: IPost[]
    }
}

const Posts: FC = () => {
    const posts = useSelector((state: RootState) => state.postsState.posts);

    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>

            {posts.map((item: IPost, index: number) => (
                <Post key={index} post={item}/>
            ))}
        </div>
    );
};


export default Posts;
