import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  const firstThreeUsers = users.slice(0, 3);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {firstThreeUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;