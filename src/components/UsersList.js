import React from "react";

const UsersList = ({ users }) => {
  return (
<ul>
  {users.map(u => (
    <li key={u.id}>
      <a href={`/users/${u.id}`}>{u.name}</a>
    </li>
  ))}
</ul>
  );
};

export default UsersList;
