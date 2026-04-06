import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import AddPostForm from "./AddPostForm";
import SinglePostPage from "./SinglePostPage";
import EditPostForm from "./EditPostForm";
import UsersList from "./UsersList";
import UserPage from "./UserPage";
import NotificationsList from "./NotificationsList";
import { initialPosts, usersData } from "../data/initialData";

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const addReaction = (postId, reaction) => {
    setPosts(posts.map(post => {
      if (post.id === postId && reaction !== "noop") {
        return {
          ...post,
          reactions: {
            ...post.reactions,
            [reaction]: post.reactions[reaction] + 1
          }
        };
      }
      return post;
    }));
  };

  const refreshNotifications = () => {
    setNotifications([{ id: 1, message: "New notification!" }]);
  };

  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <AddPostForm addPost={addPost} users={usersData} />
              <PostsList posts={posts} addReaction={addReaction} />
            </>
          } />

          <Route path="/posts/:postId" element={
            <SinglePostPage posts={posts} />
          } />

          <Route path="/editPost/:postId" element={
            <EditPostForm posts={posts} updatePost={updatePost} />
          } />

          <Route path="/users" element={<UsersList users={usersData} />} />
          <Route path="/users/:userId" element={<UserPage posts={posts} />} />

          <Route path="/notifications" element={
            <NotificationsList
              notifications={notifications}
              refresh={refreshNotifications}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;