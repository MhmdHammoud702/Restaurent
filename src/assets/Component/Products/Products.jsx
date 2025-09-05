import { div, main } from 'framer-motion/client'
import React from 'react'
import food1 from '../../food.png';
import food2 from '../../banner.png';
import food3 from '../../food2.png';
import chicken from '../../pep.png';
import avatar from '../../avatar.png';
import peperoni from '../../peperoni.png';
import chicken2 from '../../chicken.png';
import divx from '../../div.png';
import rice from '../../rice.png';
import {motion} from 'framer-motion';
const Products = () => {
  return (
    <main className='overflow-hidden'>
    <div className='min-h-[650px] mx-auto p-[1rem] sm:py-[2rem] sm:px-[4rem] lg:p-[3rem] xl:p-[5rem] 2xl:p-[6rem] bg-[var(--white2)] overflow-hidden relative z-10'>
        <div className=''>
            {/* Hot desserts */}
            <div className='px-1 md:px-10 lg:px-10 space-y-10'>
            <motion.h1 initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.2}} className='text-[var(--darkGreen)] text-2xl lg:ml-6 text-center md:text-left pt-5'>FOOD MENU</motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-12 place-items-center font-semibold">
                 <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.6}} className="bg-white flex items-center rounded-2xl h-[200px] w-full max-w-[500px] space-x-0 group box-shadow">
                    <img src={food1}  className="w-[200px] h-[200px] object-cover scale-[0.8] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-50 hover:scale-[1] img-shadow"/>
                    <div className="">
                    <h1>Hot Soup</h1>
                    <p className='text-orange-400'>$5.99</p>
                   </div>
                 </motion.div>

                <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className="bg-white flex items-center rounded-2xl h-[200px] w-full max-w-[500px] space-x-0 group box-shadow">
                     <img src={food3} className="w-[200px] h-[200px] object-cover scale-[0.8] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-50 hover:scale-[1]  img-shadow" alt="" />
                     <div className="">
                     <h1>Morning Plate</h1>
                     <p className='text-orange-400'>$5.00</p>
                     </div>
                </motion.div>

                 <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.2}} className="bg-white flex items-center rounded-2xl h-[200px] w-full max-w-[500px] space-x-0 group box-shadow">
                     <img src={food2} className="w-[200px] h-[200px] object-cover scale-[0.8] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-50 hover:scale-[1] img-shadow" alt="" />
                      <div className="">
                      <h1>Fried Meat</h1>
                      <p className='text-orange-400'>$5.00</p>
                     </div>
                </motion.div>
            </div>
            </div>
            
            {/* Text Content */}
            <div className='px-3 mt-25 md:px-10 lg:px-20 '>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-29 lg:gap-30'>
                    <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.2}} className='w-[430px] bg-[var(--lightYellow)] rounded-full p-4 shrink-0'>
                        <img src={chicken} className=' transition-transform duration-700 hover:-translate-y-10 hover:translate-x-8 hover:rotate-50 hover:scale-[1.1] img-shadow' alt="" />
                    </motion.div>
                    <motion.div initial={{opacity: 0,x:100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.2}} className='w-[450px] space-y-6 text-center md:text-left px-15 md:px-0'>
                        <h1 className='league text-4xl md:text-6xl font-bold uppercase'>The best yummy food in the town</h1>
                        <p className='text-lg md:text-[23px]'>Experience the perfect blend of flavor and freshness in every bite. Our dishes are crafted with love to make every meal feel truly unforgettable</p>
                        <button className='bg-[var(--darkGreen)] text-xl px-6 py-2 rounded-full font-bold text-white cursor-po'>Order Now</button>
                    </motion.div>
                </div>
            </div>


            {/* Recipe */}
            <div className='px-1 mt-30 md:px-10 lg:px-10 space-y-15'>
            <motion.h1 initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className='text-black font-bold text-6xl lg:ml-6 text-center pt-5 league'>OUR POPULAR RECIPE</motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-20 lg:gap-12 place-items-center font-semibold">
                 <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.2}} className="bg-white flex flex-col items-center rounded-2xl h-full w-full max-w-[300px] space-x-0 group box-shadow">
                    <img src={peperoni}  className="w-[300px] h-[300px] object-cover scale-[0.7] transition-transform group group-hover:-translate-y-20 group-hover:translate-x-20 group-hover:rotate-50 hover:scale-[0.9] img-shadow"/>
                    <div className="text-2xl h-full text-center">
                    <button className='bg-[var(--darkGreen)]  block lg:hidden ml-5 text-sm px-6 py-2 mb-4 cursor-pointer group-hover:block rounded-full font-bold text-white '>Order Now</button>
                    <h1>Pizza Peperoni</h1>
                    <p className='text-orange-400 pb-10'>$5.99</p>
                   </div>
                 </motion.div>

                <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.3}} className="bg-white flex flex-col items-center rounded-2xl h-full w-full max-w-[300px] space-x-0 group box-shadow">
                     <img src={chicken2} className="w-[300px] h-[300px] object-cover scale-[0.8] transition-transform group group-hover:-translate-y-20 group-hover:translate-x-20 group-hover:rotate-50 hover:scale-[1] img-shadow" alt="" />
                     <div className="text-2xl h-full text-center">
                     <button className='bg-[var(--darkGreen)] block lg:hidden ml-3 text-sm px-6 py-2 mb-4 group-hover:block cursor-pointer rounded-full font-bold text-white '>Order Now</button>
                     <h1>Chicken Plate</h1>
                     <p className='text-orange-400 pb-10'>$5.00</p>
                     </div>
                </motion.div>

                 <motion.div initial={{opacity: 0,x:-100}} whileInView={{opacity:1,x:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.4}} className="bg-white flex flex-col items-center rounded-2xl h-full w-full max-w-[300px] space-x-0 space-y- group box-shadow">
                     <img src={rice} className={`w-[300px] h-[300px] object-cover scale-[0.8] transition-transform group group-hover:-translate-y-20 group-hover:translate-x-20 group-hover:rotate-50 hover:scale-[1] img-shadow`} alt="" />
                      <div className=" text-2xl h-full text-center ">
                      <button className=' bg-[var(--darkGreen)]  block lg:hidden ml-16 text-sm px-6 py-2 mb-4 group-hover:block cursor-pointer rounded-full font-bold text-white '>Order Now</button>
                      <h1 className=''>Rice And Chicken Plate</h1>
                      <p className='text-orange-400 pb-10'>$5.00</p>
                     </div>
                </motion.div>
            </div>
            </div>

            {/* Description */}
            
            <div className="flex flex-col mt-40 lg:flex-row items-center mb-20 justify-center-safe md:px-1 lg:px-25 md:gap-25 lg:gap-20 xl:gap-50 space-y-10 lg:space-y-0 "> 
              {/* Text section */}
                    <motion.div initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.6}} className="w-[350px] xl:w-[500px] space-y-6 mt-15 sm:mt-15 lg:mt-0 px-4 md:px-6 text-center lg:text-left">
                      <p className="font-mono text-xl md:text-xl leading-relaxed shrink-0">
                        “This website was designed and developed by a passionate front-end designer who loves
                        blending creativity with clean code. With a focus on modern UI/UX and smooth user interactions,
                        every detail has been crafted to deliver both beauty and functionality.”
                     </p>
                     <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start md:items-start gap-5">
                     <img src={avatar} className="w-16 h-16 rounded-full" alt="avatar"/>
                     <h1 className="font-bold text-2xl">Developer</h1>
                     </div>
                  </motion.div>

               {/* Yellow circle with image */}
                    <motion.div initial={{opacity: 0,y:-100}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness: 100,damping: 10,delay:0.6}} className="flex items-center justify-center w-[350px] h-[350px] bg-[var(--lightYellow)] rounded-full shrink-0">
                     <img 
                       src={divx} 
                       className="w-[300px] h-[300px] object-contain transition-transform duration-700 hover:-translate-y-2 hover:translate-x-2 hover:rotate-6 hover:scale-110 img-shadow" 
                       alt="" 
                      />
                   </motion.div>
            </div>



        </div>
   </div>
   </main>
  )
}

export default Products