import React from "react";

const PostsList = ({ posts, addReaction }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>

          {["like","love","wow","haha","noop"].map(r => (
            <button key={r} onClick={() => addReaction(post.id, r)}>
              {post.reactions[r]}
            </button>
          ))}

          <a className="button" href={`/posts/${post.id}`}>Edit</a>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
