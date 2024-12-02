"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "./json";
import Button from "@/common/Button";
import "../styles/navigation.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link href="/">
          <h2 className="nav__logo">Ironji</h2>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="nav__hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index} onClick={toggleMenu}>
                <Link className="nav__link" href={item.path}>
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__actions">
            <Button title="GET A QUOTE" path="/contact" styles="nav__button" />
            <Button title="Login" path="/login" styles="nav__button" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
