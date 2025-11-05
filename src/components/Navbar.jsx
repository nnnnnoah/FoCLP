import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Dropdown from "./ui/Dropdown";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navOffset, setNavOffset] = useState(0);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const toggleMobileDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const menuItems = [
    {
      title: "Our Park",
      link: "/about",
      items: [
        { link: "/about", label: "About the Park" },
        { link: "/maps", label: "Maps" },
        { link: "/trails", label: "Trails" },
        { link: "/facilities", label: "Park Facilities" },
      ],
    },
    {
      title: "Events",
      link: "/events",
      items: [
        { link: "/events", label: "Special Events" },
        { link: "/activities", label: "Activities" },
        { link: "/raffle", label: "Annual Raffle" },
        { link: "/pavilion", label: "Pavilion Project" },
      ],
    },
    {
      title: "Other Info",
      link: "/resources",
      items: [
        { link: "/reports", label: "Board & Reports" },
        { link: "/contributions", label: "Contributions" },
        { link: "/resources", label: "Resources" },
        { link: "/join", label: "Get Involved" },
      ],
    },
    {
      title: "Contact Us",
      link: "/contact",
      items: [
        { link: "/contact", label: "Contact" },
        { link: "/volunteer", label: "Volunteer" },
      ],
    },
  ];

  // Sticky navbar functionality for desktop
  useEffect(() => {
    if (navRef.current) {
      setNavOffset(navRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (navRef.current) {
        const scrollPosition = window.scrollY;

        if (scrollPosition > navOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navOffset]);

  // Position the mobile menu directly below the hamburger button
  useEffect(() => {
    if (mobileMenuOpen && hamburgerRef.current && mobileMenuRef.current) {
      const updatePosition = () => {
        const rect = hamburgerRef.current.getBoundingClientRect();
        mobileMenuRef.current.style.top = `${rect.bottom}px`;
      };

      updatePosition();

      // Update on scroll in case navbar is sticky
      window.addEventListener("scroll", updatePosition);

      return () => window.removeEventListener("scroll", updatePosition);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav
        ref={navRef}
        className={`hidden md:flex justify-center text-center transition-all duration-200 ${
          isSticky ? "fixed top-0 left-0 right-0 z-[1000] shadow-lg" : ""
        }`}
      >
        {/* Our Park Dropdown */}
        <Dropdown
          title="Our Park"
          link="/about"
          openMenu={openMenu}
          toggleMenu={toggleMenu}
          items={menuItems[0].items}
        />
        {/* Events Dropdown */}
        <Dropdown
          title="Events"
          link="/events"
          openMenu={openMenu}
          toggleMenu={toggleMenu}
          items={menuItems[1].items}
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
          items={menuItems[2].items}
        />
        {/* Contact Us Dropdown */}
        <Dropdown
          title="Contact Us"
          link="/contact"
          openMenu={openMenu}
          toggleMenu={toggleMenu}
          items={menuItems[3].items}
        />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden" id="mobile-menu">
        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed left-0 right-0 bg-gray-100 shadow-lg z-50"
          >
            <div className="flex flex-col">
              {menuItems.map((menu, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleMobileDropdown(menu.title)}
                    className="w-full text-left px-6 py-4"
                  >
                    {menu.title.toUpperCase()}
                  </button>
                  {openMenu === menu.title && (
                    <div className="mobile-dropdown">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.link}
                          onClick={closeMobileMenu}
                          className="block px-8 py-3"
                        >
                          {item.label.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Membership Link */}
              <button className="w-full text-left px-6 py-4">
                <Link
                  to="/membership"
                  id="mobile-membership-link"
                  onClick={closeMobileMenu}
                >
                  MEMBERSHIP
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
