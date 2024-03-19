// import Image from "next/image";
"use client";
import { useRef, useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitcher";
import "../app/styles/styles.css";
import "hamburgers/dist/hamburgers.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import nivea from "../public/images/nivea.png";
import Values from "./components/values";
import Services from "./components/services";

export default function Home() {
  const divRefs = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  AOS.init();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  const scrollToDiv = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Prevent default behavior of double-click (e.g., zoom)

    if (divRefs.current && divRefs.current[index]) {
      divRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="z-20 flex sticky top-0 items-center justify-between h-16 bg-gray-400 text-white px-24">
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
        className="bg-white min-h-screen z-20 px-24"
      >
        <div className="flex flex-row text-black py-10">
          <div className="flex flex-col">
            <p
              data-aos="fade-right"
              className="font-extralight text-5xl mt-5"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              Your Trusted Partner for Wholesale Beauty Products in Pakistan
            </p>
            <span>Since 1985</span>
            <button className="bg-red-200 p-3 cursor-pointer w-fit rounded-md mt-10">
              Get a quote
            </button>
          </div>
          <Image
            src="/images/image2.png"
            width={500}
            height={700}
            alt="warehouse"
          />
        </div>
      </div>
      <div
        ref={(ref) => (divRefs.current[1] = ref!)}
        className="bg-white min-h-screen px-24"
      >
        <div className="flex flex-col text-black items-center justify-center">
          <h1 className="text-4xl">Our Partner Brands</h1>

          <p className="text-center my-10">
            Discover a wide range of cosmetic and toiletries products from top
            brands at our retail store. We carry multiple brands, offering you a
            selection of high-quality products to meet your unique needs.
          </p>

          <div className="w-80 h-[21rem] bg-slate-300">
            <div className="grid grid-cols-3 grid-rows-4 gap-x-0 gap-y-4">
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="square">
                <Image
                  src={nivea}
                  alt="dsw"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(ref) => (divRefs.current[2] = ref!)}
        className="bg-white text-black min-h-screen px-24"
      >
        <Services />
      </div>

      <div
        ref={(ref) => (divRefs.current[3] = ref!)}
        className="bg-white min-h-screen px-24 text-black"
      >
        <Values />
      </div>

      <div
        id="our-story"
        ref={(ref) => (divRefs.current[4] = ref!)}
        className="bg-blue-600 min-h-screen"
      ></div>
    </>
  );
}
