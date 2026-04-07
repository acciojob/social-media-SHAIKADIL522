import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
