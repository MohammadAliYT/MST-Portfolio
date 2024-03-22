"use client";
import React, { useEffect } from "react";
import { MenuButton } from "../Buttons/MenuButton";

export const Header = () => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    if (!logo) return; // Exit early if logo is null

    const handleMouseEnter = () => {
      const colors = [
        "#ed7c50",
        "#d96d43",
        "#595959",
        "#8a8a8a",
        "#43ae61",
        "#8566f6",
        "#a6e2e3",
        "#e46060",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      logo.style.color = randomColor;
    };

    const handleMouseLeave = () => {
      logo.style.color = "black";
    };

    logo.addEventListener("mouseenter", handleMouseEnter);
    logo.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      logo.removeEventListener("mouseenter", handleMouseEnter);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Run effect only once on mount

  return (
    <div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container  flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
          <MenuButton>Menu</MenuButton>
          <div
            id="logo"
            className="header_logo text-[#282829] font-moldyen text-5xl pointer-event-auto cursor-pointer leading-none transition-height h-10 duration-500 ease-out lg:h-16"
          >
            M.S Traders
          </div>
          <MenuButton> Get in Touch</MenuButton>
        </div>
      </div>
    </div>
  );
};
