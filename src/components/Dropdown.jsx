import React from "react";

function Dropdown({ title, link, openMenu, toggleMenu, items }) {
  const isOpen = openMenu === title;

  return (
    <div
      className="dropdown"
      onMouseEnter={() => toggleMenu(title)}
      onMouseLeave={() => toggleMenu(null)}
    >
      <a className="nav-parent" href={link}>
        {title}
      </a>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map(({ link, label }) => (
            <a key={label} href={link}>
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
