import React from 'react'
import logo from '../../logo.png'
import { FaCcVisa,FaCcMastercard,FaCcPaypal,FaCcAmex,FaCcDiscover } from 'react-icons/fa';
import { FaFacebookF,FaInstagram,FaTwitter,FaGoogle } from 'react-icons/fa';
import {motion} from "framer-motion";
const Footer = () => {
  return (
    <div className='bg-[var(--lightYellow)] px-25 py-10'>
  <motion.div initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.6}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    
    {/* description */}
    <div className='flex flex-col justify-center items-center space-y-5 text-center'>
      <img src={logo} className='w-[150px]' alt="" />
      <h1 className='max-w-[400px]'>Savor the taste of tradition and freshness. From our kitchen to your table,
        we bring you delicious meals crafted with love and the finest ingredients.
        Come enjoy a truly memorable dining experience!</h1>
    </div>

    {/* Quick Links */}
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-3xl font-semibold mt-5'>Quick Links</h1>
      <nav className='pt-10'>
        <div className='flex flex-col space-y-5 justify-center items-center'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Contact</a>   
        </div>                 
      </nav>
    </div>

    {/* Payment */}
    <div className='flex flex-col justify-center items-center text-center  lg:ml-0'>
      <h1 className='text-3xl font-bold mt-10'>Follow Us</h1>
      <div className='flex mt-6 items-center justify-center gap-4 '>
        <FaFacebookF className='bg-white w-9 h-9 pt-2 rounded-full '/>
        <FaInstagram className='text-4xl'/>
        <FaTwitter className='text-4xl'/>
        <FaGoogle className='text-4xl'/>
      </div>

      <h1 className='text-2xl font-semibold mt-6'>Payment Methods</h1>
      <div className='mt-5 mb-10 flex gap-4 text-4xl justify-center0986werty md:text-center'>
        <FaCcVisa className="text-black cursor-pointer" />
        <FaCcMastercard className="text-black cursor-pointer" />
        <FaCcPaypal className="text-black cursor-pointer" />
        <FaCcAmex className="text-black cursor-pointer" />
        <FaCcDiscover className="text-black cursor-pointer" />
      </div>
    </div>

  </motion.div>
</div>

  )
}

export default Footer