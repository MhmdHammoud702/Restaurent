import React, { useEffect, useRef } from "react";

export const ResponsiveMenu = ({ Menu, showMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false); // hide menu
      }
    };

    if (Menu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Menu, showMenu]);

  return (
    <div
      className={`${
        Menu ? "top-28 opacity-100 py-0" : "top-[-100%] opacity-0"
      } fixed top-0 w-full h-auto z-40 bg-white/40 backdrop-blur-md  transition-all duration-500`}
    >
      <nav
        ref={menuRef}
        className="w-80 mx-auto mt-0 p-5 rounded-lg"
      >
        <ul className="flex flex-col space-y-4 text-[2rem] league text-center">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
