import React from "react";
import logo from "/assets/images/logo.png";

function Header() {
  return (
    <header className="">
      <a href="/">
        <img
          className="logo"
          src={logo}
          alt="Friends of Charleston Lake Park Logo"
        ></img>
      </a>
    </header>
  );
}

export default Header;
