"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-opacity-30 backdrop-blur-lg bg-gray-900 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition duration-300"
          >
            MyPortfolio
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={cn(
                  "cursor-pointer hover:text-blue-400 transition-transform transform hover:scale-105"
                )}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            id="menu-button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-haspopup="true"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden flex flex-col space-y-4 mt-4 bg-gray-800 px-6 py-4 rounded-lg ${isMenuOpen ? "block" : "hidden"}`}
      >
        {["Home", "Services", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={cn(
              "cursor-pointer text-white hover:text-blue-400 transition-transform transform hover:scale-105"
            )}
            onClick={toggleMenu} // Close menu after clicking a link
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
