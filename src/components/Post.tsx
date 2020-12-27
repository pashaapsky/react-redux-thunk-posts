import React, { FunctionComponent } from 'react';
import {IPost} from "../store/posts/types";

interface OwnProps {
    post: IPost
}

type Props = OwnProps;

const Post: FunctionComponent<Props> = ({post}) => {

  return (
      <div>
          {post.id}
          {post.text}
      </div>
  );
};

export default Post;
