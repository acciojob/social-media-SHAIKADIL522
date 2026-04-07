import React from "react";

const UsersList = ({ users }) => {
  return (
    <ul>
      {/* ✅ Only first 3 users */}
      {users.slice(0, 3).map(u => (
        <li key={u.id}>
          <a href={`/users/${u.id}`}>{u.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;