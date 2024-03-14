// import Image from "next/image";
"use client";
import { useRef, useState } from "react";
import ThemeSwitch from "./ThemeSwitcher";
import "hamburgers/dist/hamburgers.css";

export default function Home() {
  const divRefs = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToDiv = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent default behavior of double-click (e.g., zoom)

    if (divRefs.current && divRefs.current[index]) {
      divRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log("toggle", isOpen);

  return (
    <>
      <nav className="flex sticky top-0 items-center justify-between h-16 bg-gray-400 text-white px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold">M.S Traders.</span>
        </div>

        <ul className="hidden md:flex space-x-4 list-none">
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#" onClick={(event) => scrollToDiv(0, event)}>
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#" onClick={(event) => scrollToDiv(1, event)}>
              Brands
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#" onClick={(event) => scrollToDiv(2, event)}>
              Products
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#" onClick={(event) => scrollToDiv(3, event)}>
              Services
            </a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#" onClick={(event) => scrollToDiv(4, event)}>
              Our Story
            </a>
          </li>
        </ul>

        <div className="flex flex-row items-center">
          <ThemeSwitch />
          <div className="md:hidden pt-1">
            <button
              className={`hamburger hamburger--elastic ${
                isOpen ? "is-active" : ""
              }`}
              type="button"
              aria-label="Menu"
              aria-controls="navigation"
              onClick={toggleMenu}
            >
              <span className="hamburger-box transform scale-50">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div
              className={`absolute top-12 right-8 bg-white text-black ${
                isOpen
                  ? "right-10 opacity-100 visible"
                  : "right-8 opacity-0 invisible"
              }`}
            >
              <ul className="cursor-pointer" onClick={toggleMenu}>
                <li className="px-3">Home</li>
                <li className="px-3">About</li>
                <li className="px-3">Services</li>
                <li className="px-3">Brands</li>
                <li className="px-3">Products</li>
                <li className="px-3">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={(ref) => (divRefs.current[0] = ref!)}
        className="bg-red-400 min-h-screen"
      ></div>
      <div
        ref={(ref) => (divRefs.current[1] = ref!)}
        className="bg-red-600 min-h-screen"
      ></div>
      <div
        ref={(ref) => (divRefs.current[2] = ref!)}
        className="bg-green-600 min-h-screen"
      ></div>
      <div
        ref={(ref) => (divRefs.current[3] = ref!)}
        className="bg-yellow-600 min-h-screen"
      ></div>
      <div
        ref={(ref) => (divRefs.current[4] = ref!)}
        className="bg-blue-600 min-h-screen"
      ></div>
    </>
  );
}
