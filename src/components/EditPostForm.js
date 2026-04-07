import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditPostForm = ({ posts, updatePost }) => {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!post) return null;

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />

      <button
        onClick={() => updatePost({ ...post, title, content })}
      >
        Save
      </button>
    </div>
  );
};

export default EditPostForm;
