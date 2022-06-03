import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar--name-logo">
        <h2>Expense</h2>
      </div>
      <div className="navbar--search">
        <input type="search" name="search" placeholder="Search" />
        <FaSearch size={10} style={{marginLeft: -20}} />
      </div>
      <nav className="navbar--nav">
        <ul className="navbar--nav--list">
          <li className="nav--list-item">
            <a href="/">Overview</a>
          </li>
          <li className="nav--list-item marginr-0">
            <a href="/">Finance</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
