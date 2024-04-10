import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleNav = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <nav className='bg-gradient-to-r from-[#0D0E10] to-[#3a3f42] px-10 py-2 flex items-center justify-between h-16 w-screen'>
                <h1 className='text-white w-fit font-sans font-bold text-center text-2xl sm:text-3xl'>Feane</h1>


                <ul className={` flex-col p-3 absolute top-[7vh] right-0 space-y-3 bg-transparent md:flex-row md:static md:flex  md:space-x-6 md:text-2xl   ${isClicked ? "flex" : "hidden"}`}>
                    <li ></li>
                    <li className='text-gray-500 cursor-pointer hover:text-red-500 focus:border-2 focus:border-red-500'>Home</li>
                    <li className='text-gray-500 cursor-pointer hover:text-red-500 focus:border-2 focus:border-red-500'>Menu</li>
                    <li className='text-gray-500 cursor-pointer hover:text-red-500 focus:border-2 focus:border-red-500'>About</li>
                    <li className='text-gray-500 cursor-pointer hover:text-red-500 focus:border-2 focus:border-red-500'>Book Table</li>
                </ul>

                <div className="flex space-x-8">
                    <ImSearch color='white' className='size-5 sm:size-6 cursor-pointer' />
                    <FaCartShopping color='white' className='size-5 sm:size-6 cursor-pointer' />
                    <GiHamburgerMenu onClick={toggleNav} color='white' className='cursor-pointer size-5 sm:size-6 md:hidden' />
                </div>

            </nav>
        </>
    );
};

export default Navbar;
