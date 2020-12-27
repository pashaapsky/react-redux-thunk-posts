import React, {FC, useState} from 'react';
import {addPost} from '../store/posts/actions'
import {useDispatch} from "react-redux";
import {IPost} from "../store/posts/types";

const PostForm:FC = () => {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!text.trim()) {
            return
        }

        const newPost: IPost = {
            id: Number(new Date()),
            text: text
        };

        dispatch(addPost(newPost));
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="text" onChange={(event) => setText(event.target.value)}/>

            <button type="submit">Добавить</button>
        </form>
    );
};


export default PostForm;
