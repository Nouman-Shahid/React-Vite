import React, { useState } from "react";
import { RiHome4Fill } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { IoGiftSharp } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bottombar = () => {
  const [clickedItem, setClickedItem] = useState(1);

  const handleClick = (id) => {
    setClickedItem(id === clickedItem ? null : id);
  };

  const icons = [
    {
      id: 1,
      text: "Home",
      icon: RiHome4Fill,
      path: "/",
    },
    {
      id: 2,
      text: "Categories",
      icon: BiCategoryAlt,
      path: "/message",
    },
    {
      id: 3,
      text: "Rewards",
      icon: IoGiftSharp,
      path: "/cart",
    },
    {
      id: 4,
      text: "Personalization",
      icon: PiNotePencil,
      path: "/settings",
    },
    {
      id: 5,
      text: "Chat",
      icon: FaWhatsapp,
      path: "/settings",
    },
  ];

  return (
    <nav className="fixed bottom-0 h-[8vh] px-8 w-screen flex items-center justify-between border-t-2 border-gray-300 bg-gray-100 z-10 md:hidden">
      {icons.map((item) => (
        <Link to={item.path} key={item.id}>
          <div
            className="flex flex-col items-center"
            onClick={() => handleClick(item.id)}
          >
            <item.icon className={"text-gray-800  size-[3.8vh]"} />
            <p className={"text-gray-500 text-[1.5vh]"}>{item.text}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Bottombar;
