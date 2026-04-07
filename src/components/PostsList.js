import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts, addReaction }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          {/* ✅ MUST BE 3rd child */}
          <Link className="button" to={`/posts/${post.id}`}>
            View Post
          </Link>

          {/* ✅ MUST BE 4th child */}
          <div>
            {["like","love","wow","haha","noop"].map(r => (
              <button
                key={r}
                className="button"
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