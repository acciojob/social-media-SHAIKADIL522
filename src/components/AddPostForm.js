import React, { useState } from "react";

const AddPostForm = ({ addPost, users }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  // ✅ Safe ID generator (no external dependency)
  const generateId = () => Date.now().toString();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !content) return;

    addPost({
      id: generateId(),
      title,
      userId: author,
      content,
      reactions: { like: 0, love: 0, wow: 0, haha: 0, noop: 0 }
    });

    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value=""></option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Save Post</button>
    </form>
  );
};

export default AddPostForm;
