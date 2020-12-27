import React, {FunctionComponent} from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import AsyncPosts from "./components/AsyncPosts";

const App: FunctionComponent = () => {

    return (
        <div>
            <Posts />

            <PostForm />

            <AsyncPosts />
        </div>
    );
};

export default App;

