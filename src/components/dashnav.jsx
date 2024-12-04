"use client";
import React, { useState } from "react";
import { navigation } from "./json";
import Link from "next/link";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import "../styles/dashnav.scss";
import { usePathname } from "next/navigation";

const Dashnav = () => {
  const pathname = usePathname();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dashnav">
      {/* Hamburger Menu Icon for Mobile */}
      <div className="nav__hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <ul className={`dashnav__list ${isOpen ? 'open' : ''}`}>
        {navigation.map((item) => (
          <li
            key={item.name}
            className={pathname === item.route ? "active" : ""}
          >
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="dashnav__user-container">
        <div className="dashnav__user">
          <FaUserCircle className="dashnav__user-icon" />
          <div className="dashnav__user-info">
            <span>John Doe</span>
            <p>john@doe.com</p>
          </div>
        </div>
        <span className="dashnav__logout" onClick={handleLogout}>
          <FaSignOutAlt className="dashnav__logout-icon" />
        </span>
      </div>
    </nav>
  );
};

export default Dashnav;
