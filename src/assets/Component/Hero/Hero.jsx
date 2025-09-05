import React from 'react'
import Plate from '../../food.png'
import banana from '../../banana.png'
import leafs from '../../leaf-DlTYHFCQ.png';
import spoon from '../../spoon.png';
import { FaShoppingCart } from 'react-icons/fa';
import {animate, motion} from "framer-motion";

const slideUp = (delay) => {
  return{
    initial:{
      y:"100%",
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

const style ={
  backgroundColor: "yellow",
  width : "200px"
};

const Hero = () => {
  return (
    <main className='relative overflow-hidden'>  
      <div className='min-h-[650px] flex justify-center mx-auto p-[1rem] sm:p-[2rem] lg:p-[3rem] xl:p-[5rem] 2xl:p-[6rem] bg-[var(--white2)] overflow-hidden relative z-10'> 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between'> 
          {/* text content */}
          <div className='space-y-3 mt-14 mb-10 text-center md:text-left md:mt-0 md:pl-20'>
            <div className='flex flex-row justify-center md:justify-start mb-0'>
              <motion.h1 variants={slideUp(0.5)} initial="initial" whileInView="animate" className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-[var(--white2)] text-outline '>
              Yummy</motion.h1>
              <motion.img variants={slideUp(1)} initial="initial" whileInView="animate" src={leafs} alt="" className='lg:w-[80px] md:w-[40px] w-[40px] top-2 right-10 md:right-[150px] md:top-3' />
            </div> 
            <motion.h1 variants={slideUp(0.8)} initial="initial" whileInView="animate" className='text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'>Breakfast
            </motion.h1>
            <motion.p variants={slideUp(0.9)} initial="initial" whileInView="animate" className='text-md'>Yummy Breakfast Restaurant serves fresh, flavorful mornings with fluffy pancakes,
               crispy bacon, and rich coffee.A cozy spot where every bite feels like the perfect
                start to your day.</motion.p>
          <div className='flex items-center justify-center md:justify-start'>
            <motion.button variants={slideUp(1.2)} initial="initial" whileInView="animate" className='flex items-center justify-center space-x-2 py-2 px-5 text-white cursor-pointer rounded-full bg-[var(--darkGreen)]'><FaShoppingCart/><p>Order Now</p></motion.button>
          </div>
          </div>
          {/* Images Content */}
          <div className='relative'>
            <motion.img initial={{opacity:0,rotate:20,x:200,y:100}} whileInView={{opacity:1,rotate:0,x:0,y:0}} transition={{duration:0.9}} className="img-shadow z-10" src={Plate}/>
            <motion.img initial={{opacity:0,rotate:20,x:200,y:100}} whileInView={{opacity:1,rotate:0,x:0,y:0}} transition={{duration:0.9}} className='absolute img-shadow w-[350px] bottom-[-120px] -left-16 rotate-[75deg] z-10' src={spoon} alt="" />
            <motion.img initial={{opacity:0,rotate:20,x:200,y:100}} whileInView={{opacity:1,rotate:0,x:0,y:0}} transition={{duration:0.9}} className='absolute img-shadow w-[400px] top-[-20px] right-[-150px] rotate-[370deg] z-10  ' src={banana}/>
          </div>
        </div>
       <motion.div initial={{opacity:0,rotate:40,x:200,y:100}} whileInView={{opacity:1,rotate:50,x:0,y:0}} transition={{duration:0.9}} className='bg-[var(--lightYellow)] h-[2500px] absolute -z-1 w-[2500px] top-[-25%] left-[70%] md:top-[-50%] md:left-[80%]'></motion.div>
      </div>
      {/* background Yellow */}
    </main>
  )
}

export default Hero