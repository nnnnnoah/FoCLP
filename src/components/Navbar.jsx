import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./ui/Dropdown";
import Membership from "../pages/Membership";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="flex justify-center text-center">
      {/* Our Park Dropdown */}
      <Dropdown
        title="Our Park"
        link="/about"
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        items={[
          { link: "/about", label: "About" },
          { link: "/maps", label: "Maps" },
          { link: "/trails", label: "Trails" },
          { link: "/facilities", label: "Park Facilities" },
        ]}
      />

      {/* Events Dropdown */}
      <Dropdown
        title="Events"
        link="/events"
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        items={[
          { link: "/events", label: "Special Events" },
          { link: "/activities", label: "Activities" },
          { link: "/raffle", label: "Annual Raffle" },
          { link: "/pavilion", label: "Pavilion Project" },
        ]}
      />

      {/* Membership Link */}
      <div>
        <Link to="/membership" className="nav-parent">
          Membership
        </Link>
      </div>

      {/* Other Info Dropdown */}
      <Dropdown
        title="Other Info"
        link="/resources"
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        items={[
          { link: "/resources", label: "Resources" },
          { link: "/reports", label: "Board & Reports" },
          { link: "/contributions", label: "Contributions" },
        ]}
      />

      {/* Contact Us Dropdown */}
      <Dropdown
        title="Contact Us"
        link="/contact"
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        items={[
          { link: "/contact", label: "Contact" },
          { link: "/volunteer", label: "Volunteer" },
        ]}
      />
    </nav>
  );
}

export default Navbar;
