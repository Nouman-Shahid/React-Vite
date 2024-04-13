import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { IoMdHelp } from "react-icons/io";
import { BiSolidPhone } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";




const Navbar = ({ userName, userImg, userEmail, handleUserAPI }) => {

    let navItems = [
        {
            name: 'Home',
            path: '/',
            icon: GoHomeFill,
        },
        {
            name: 'About',
            path: '/about',
            icon: FcAbout,
        },
        {
            name: 'Cart',
            path: '/cart',
            icon: GrCart,
        },
        {
            name: 'Help',
            path: '/help',
            icon: IoMdHelp,
        },
        {
            name: 'Phone',
            path: '/phone',
            icon: BiSolidPhone,
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: IoSettings,
        },
    ]

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        <nav className='flex fixed w-screen h-[8vh] bg-gray-100 justify-between items-center px-4 z-10'>

            <div className="flex space-x-3 items-center ">
                {
                    (nav == true) ?
                        <RxCross2 onClick={toggleNav} className='size-[4vh] text-blue-500  md:hidden' />
                        :
                        <IoMenu onClick={toggleNav} className='size-[4vh] text-blue-500  md:hidden' />
                }
                <p className='text-blue-500 text-[3vh] font-bold' >BuyBox</p>
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
                <GrCart className='size-[3.5vh] text-blue-500 ' />
                <img src={userImg} alt={userName} className='rounded-[50%] size-[5.5vh]' />
            </div>


            {
                <div className={(nav == true) ? `shownav` : `hidenav`}>

                    <div className="flex item-center justify-center h-auto w-[100%] bg-zinc-300  py-[4vh] px-[2vh] space-x-2 flex-wrap  sm:space-x-6">

                        <img src={userImg} className='rounded-[50%] size-[7vh]' />
                        <div className="flex flex-col">
                            <p className='text-[2.2vh] sm:text-[2.4vh] text-gray-700 whitespace-nowrap'>{userName}</p>
                            <p className='text-[1.6vh] sm:text-[2.1vh] text-gray-500'>{userEmail}</p>
                        </div>

                    </div>



                    <ul className='flex flex-col space-y-4 py-4 justify-start w-[100%] h-[72vh]'>
                        {
                            navItems.map((items) => (
                                <Link to={items.path} key={items.name}>
                                    <li className=' hover:bg-gray-300 px-2 flex items-center w-[100%]'>
                                        <items.icon className='mr-3 size-[3vh] text-blue-500' />
                                        {items.name}
                                    </li>
                                </Link>
                            ))
                        }

                    </ul>

                    <button onClick={handleUserAPI} className='active:bg-blue-800 bg-blue-700 text-gray-300 rounded-xl px-3 py-1 my-2'>
                        Switch Account</button>

                </div>
            }


        </nav>
    )
}

export default Navbar
