import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ title, link, openMenu, toggleMenu, items }) {
  const isOpen = openMenu === title;

  return (
    <div
      className="dropdown"
      onMouseEnter={() => toggleMenu(title)}
      onMouseLeave={() => toggleMenu(null)}
    >
      <Link className="nav-parent" to={link}>
        {title}
      </Link>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map(({ link, label }) => (
            <Link key={label} to={link}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
