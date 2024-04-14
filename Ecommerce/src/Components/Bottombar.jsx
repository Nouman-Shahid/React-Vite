import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Bottombar = () => {
    const [clickedItem, setClickedItem] = useState(null);

    const handleClick = (index) => {
        setClickedItem(index === clickedItem ? null : index);
    };

    const icons = [
        {
            text: 'Home',
            icon: GoHomeFill,
            path: '/',
        },
        {
            text: 'Messages',
            icon: RiMessage2Fill,
            path: '/message'
        },
        {
            text: 'Cart',
            icon: FaShoppingCart,
            path: '/cart'
        },
        {
            text: 'Settings',
            icon: IoSettings,
            path: '/settings'
        },
    ];

    return (
        <nav className='fixed bottom-0 h-[8vh] px-10 w-screen flex items-center justify-between bg-gray-100'>
            {icons.map((item, index) => (
                <Link to={item.path} key={index}>
                    <div className="flex flex-col items-center" onClick={() => handleClick(index)}>
                        <item.icon className={clickedItem === index ? 'text-blue-500  size-[4vh]' : 'text-gray-400 size-[3.5vh]'} />
                        <p className={clickedItem === index ? 'text-blue-500 text-[2vh]' : 'text-gray-400 text-[2vh]'}>{item.text}</p>
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default Bottombar;
