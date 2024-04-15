import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Bottombar = () => {
    const [clickedItem, setClickedItem] = useState(1);

    const handleClick = (id) => {
        setClickedItem(id === clickedItem ? null : id);
    };

    const icons = [
        {
            id: 1,
            text: 'Home',
            icon: GoHomeFill,
            path: '/',
        },
        {
            id: 2,
            text: 'Messages',
            icon: RiMessage2Fill,
            path: '/message'
        },
        {
            id: 3,
            text: 'Cart',
            icon: FaShoppingCart,
            path: '/cart'
        },
        {
            id: 4,
            text: 'Account',
            icon: IoSettings,
            path: '/settings'
        },
    ];

    return (
        <nav className='fixed bottom-0 h-[8vh] px-10 w-screen flex items-center justify-between border-t-2 border-gray-300 bg-gray-100 z-10'>
            {icons.map((item) => (
                <Link to={item.path} key={item.id}>
                    <div className="flex flex-col items-center" onClick={() => handleClick(item.id)}>
                        <item.icon className={clickedItem === item.id ? 'text-gray-700  size-[4vh]' : 'text-gray-400 size-[3.5vh]'} />
                        <p className={clickedItem === item.id ? 'text-gray-700 text-[2vh]' : 'text-gray-400 text-[2vh]'}>{item.text}</p>
                    </div>
                </Link>
            ))
            }
        </nav>
    );
};

export default Bottombar;
