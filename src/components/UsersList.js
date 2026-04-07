import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.slice(0, 3).map((u) => (
        <li key={u.id}>
          <Link to={`/users/${u.id}`}>{u.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;