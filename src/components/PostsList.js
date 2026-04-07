import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts, addReaction }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>                 {/* 1 */}
          <p>{post.content}</p>                 {/* 2 */}

          {/* 👇 3rd child (IMPORTANT) */}
          <Link className="button" to={`/posts/${post.id}`}>
            View Post
          </Link>

          {/* 👇 4th child (CRITICAL for Cypress) */}
          <div>
            {["like","love","wow","haha","noop"].map(r => (
              <button
                key={r}
                onClick={() => addReaction(post.id, r)}
              >
                {post.reactions[r]}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;