import {FaShoppingCart } from "react-icons/fa";
import logo from "../../logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import {motion} from "framer-motion";
const slideDown = (delay) => {
  return{
    initial:{
      y:"-100%",
      opacity: 0,
    },
    animate:{
      y:0,
      opacity:1,
      transition: {
        duration: 0.6,
        delay:delay,
      },
    },
  };
};

export default function Navbar() {
  const [Menu,showMenu] = useState(false);
  return (
    <main >
    <div className=" p-1 px-5 sm:p-2 md:px-25 flex justify-between items-center bg-[var(--white2)] overflow-hidden">
      
      {/* Logo */}
      <div>
        <motion.img variants={slideDown(0.2)} initial="initial" whileInView="animate" src={logo} alt="Logo" className="h-[100px]" />
      </div>

      {/* Navigation */}
      <motion.div variants={slideDown(0.2)} initial="initial" whileInView="animate" className="space-x-10 text-[1.6rem] league hidden lg:block">
         <a href="#">Home</a>
         <a href="#">About</a>
         <a href="#">Menu</a>
         <a href="#">Delivery</a>
         <a href="#">Contact Us</a>
      </motion.div>


      {/* Cart */}
      <motion.div variants={slideDown(0.2)} initial="initial" whileInView="animate" className="flex justify-end space-x-6">
        <button className="bg-black p-3 rounded-full hover:bg-gray-800 cursor-pointer flex items-center justify-center">
          <FaShoppingCart className="text-white w-4 h-4" />
        </button>
        <button onClick={()=>showMenu(!Menu)} className={`transition-transform duration-150 ${Menu ? "rotate-90" : "rotate-0"} rounded-full cursor-pointer block lg:hidden`}>
          <GiHamburgerMenu className="text-black text-2xl cursor-pointer" />
        </button>
      </motion.div>
    </div>
    <div className={`block lg:hidden`}>
      <ResponsiveMenu Menu={Menu} showMenu={showMenu}/>
    </div>
  </main>
  );
}
