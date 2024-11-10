"use client"

import React, { useState } from "react";
import styles from "../../../styles/Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className={styles.header}>
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo and Furniture Title */}
        <a className="flex title-font font-medium items-center text-gray-900">
          <img
            src="https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-background_783884-205214.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Furniture Logo"
            className="w-30 h-20 text-white p-2 rounded-full"
          />
          <span className="ml-3 text-lg md:text-4xl font-extrabold">
            Furniture
          </span>
        </a>

        {/* Toggle Button for Small Screens */}
        <button className="md:hidden text-gray-900" onClick={toggleNav}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#products" className={styles.navLink}>
            Product
          </Link>
          <Link href="#gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link href="#Discounts" className={styles.navLink}>
            Discounts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
