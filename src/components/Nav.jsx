import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";

export default function Nav() {
  return (
    <>
      <nav className="w-full h-full flex justify-center text-white border-[#D8D8D8] border-b-[1px]">
        <div className="h-24 w-auto max-w-[72.875rem] flex items-center gap-50 relative">

          <ul className="flex font-primary tracking-[.04em] items-center gap-8 float-left text-black">
            <a href="/locations"></a><li className="text-lg ">LOCATIONS</li>
            <a href="/fitness"></a><li className="text-lg">FITNESS</li>
          </ul>

          <div className="nav-logo">
            <img src={logo} alt="Logo" className="h-full w-full" />
          </div>

          <ul className="flex font-primary tracking-[.04em] items-center gap-8 float-right text-black">
            <a href="/about"></a><li className="text-lg">ABOUT</li>
            <a href="/contact"></a><li className="text-lg">CONTACT</li>
          </ul>

        </div>
      </nav>
    </>
  );
}
