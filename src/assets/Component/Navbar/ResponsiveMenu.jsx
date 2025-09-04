import React from 'react'

export const ResponsiveMenu = ({Menu}) => {
  return (
    <div className={`${Menu ? "top-28 opacity-100 py-10 " : "top-[-100%] opacity-0"} overflow-hidden  h-auto w-full bg-white/40 backdrop-blur-md fixed top-0  z-40 transition-all duration-500`}>
            <nav className='text-center'>
                <div className="flex flex-col  space-y-5 league text-[2rem] ">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Delivery</a>
                <a href="#">Contact Us</a>
                </div>
             </nav>

    </div>
  )
}
