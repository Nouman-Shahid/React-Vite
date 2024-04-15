import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ userDetails }) => {
    return (
        <nav className='flex w-screen h-[8vh]  justify-between items-center px-4 bg-gray-100'>
            <div className="flex space-x-3 items-center  ">
                <p className='text-gray-700 font-mono text-[3vh] font-bold' >BuyBox</p>
            </div>
            <ul className='hidden md:flex md:space-x-3'>
                <li className='active:text-red-700'>
                    <Link to='/'>Home</Link>
                </li>
                <li>About</li>
                <li className='active:text-red-700'>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>Help</li>
                <li>Contact</li>
            </ul>
            <div className="flex space-x-2 items-center">
                {userDetails && userDetails.picture && (
                    <img src={userDetails.picture.medium} alt={userDetails.name.first} className='rounded-[50%] size-[5.5vh] border-2 border-gray-600' />
                )}
            </div>
        </nav>
    )
}

export default Navbar;
