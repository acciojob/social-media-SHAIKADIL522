import React from "react";
import { useParams } from "react-router-dom";

const SinglePostPage = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) return null;

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <a className="button" href={`/editPost/${post.id}`}>Edit</a>
    </div>
  );
};

export default SinglePostPage;
