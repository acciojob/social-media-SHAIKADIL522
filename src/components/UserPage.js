import React from "react";
import { useParams } from "react-router-dom";

const UserPage = ({ posts }) => {
  const { userId } = useParams();

  const userPosts = posts.filter(
    (p) => p.userId === Number(userId)
  );

  return (
    <>
      {userPosts.map((post) => (
        <div key={post.id} className="post">
          {post.title}
        </div>
      ))}
    </>
  );
};

export default UserPage;
