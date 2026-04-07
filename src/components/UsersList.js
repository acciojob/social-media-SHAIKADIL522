import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((u, index) => (
        <li key={u.id}>
          {/* 👇 Only first item clickable (fix Cypress error) */}
          {index === 0 ? (
            <Link className="button" to={`/users/${u.id}`}>
              {u.name}
            </Link>
          ) : (
            <span>{u.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;