import React from "react";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) return null;

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <Link className="button" to={`/editPost/${post.id}`}>
        Edit Post
      </Link>
    </div>
  );
};

export default SinglePostPage;