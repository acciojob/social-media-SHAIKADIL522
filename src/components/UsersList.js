import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.slice(0, 3).map((u) => (
        <div key={u.id}>
          <Link to={`/users/${u.id}`}>{u.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UsersList;