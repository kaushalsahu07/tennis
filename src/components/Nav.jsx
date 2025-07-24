import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";

// Importing FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Importing GSAP for animations
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Nav() {

  // Initialize GSAP
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".nav", {
      duration: 1,
      y: 95,
      ease: "power2.inOut",
    })

  });

  // State to manage mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav relative -top-22 w-full border-b border-[#D8D8D8] bg-white">
      <div className="max-w-[60rem] mx-auto flex items-center justify-center h-18 px-4 md:px-8 md:h-22 relative">
        {/* Desktop: Three columns */}
        <div className="hidden md:flex flex-1">
          <ul className="flex gap-8 font-primary tracking-[.04em] items-center text-black">
            <li className="text-lg">
              <a href="/locations">LOCATIONS</a>
            </li>
            <li className="text-lg">
              <a href="/fitness">FITNESS</a>
            </li>
          </ul>
        </div>
        <div className="lg:max-w-[12rem] md:w-[22%] sm:w-[30%]">
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <ul className="flex gap-8 font-primary tracking-[.04em] items-center text-black">
            <li className="text-lg">
              <a href="/about">ABOUT</a>
            </li>
            <li className="text-lg">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center z-50 w-10 h-10 focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon className="w-10 h-10" icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Mobile Menu: only render when open, fixed, smooth transition */}
        <div
          className={`absolute -top-10 left-0 w-full h-screen bg-white z-10 shadow-md md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "-translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col gap-4 py-22 px-6 text-4xl tracking-[.04em] font-primary text-black">
            <li>
              <a
                href="/locations"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-gray-600"
              >
                LOCATIONS
              </a>
            </li>
            <li>
              <a
                href="/fitness"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-gray-600"
              >
                FITNESS
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-gray-600"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors duration-200 hover:text-gray-600"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
