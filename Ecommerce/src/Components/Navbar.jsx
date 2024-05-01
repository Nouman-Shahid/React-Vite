import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";

const Navbar = ({ userDetails, products }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [listClick, setListClick] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };

  const showList = () => {
    setListClick(!listClick);
  };

  let lists = [
    {
      name: "boAt Personalization",
      icon: IoIosArrowForward,
    },
    {
      name: "Gift with boAt",
      icon: IoIosArrowForward,
    },
    {
      name: "Corporate Orders",
      icon: IoIosArrowForward,
    },
    {
      name: "More",
      icon: IoIosArrowForward,
    },
    {
      name: "Track Your Order",
      icon: IoIosArrowForward,
    },
  ];

  return (
    <>
      <nav className="flex w-screen h-[8vh] fixed  justify-between items-center px-2 md:px-10 bg-[#FFFFFF] z-50 ">
        <div className="flex space-x-4 items-baseline h-[8vh] ">
          {isClicked !== true ? (
            <AiOutlineMenu className="size-[3.5vh]" onClick={toggleMenu} />
          ) : (
            <RxCross1 className="size-[3.5vh]" onClick={toggleMenu} />
          )}
          <p className="text-[#1A2024] font-cinzel text-[5vh] font-[350]">
            bo
            <span
              className="font-jersey font-bold text-[4vh] 
             text-[#ED1C24] "
            >
              A
            </span>
            t
          </p>
        </div>
        <ul className="hidden md:flex md:space-x-3">
          <li className="active:text-gray-600 text-xl font-bold text-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="active:text-gray-600 text-xl font-bold text-gray-800">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <div className="flex space-x-4 items-center ">
          <IoIosSearch
            to="/cart"
            className="size-[3.8vh] text-gray-700  md:flex"
          />
          <Link to="/cart">
            <BsHandbag
              to="/cart"
              className="size-[3.5vh] text-gray-700  md:flex"
            />
          </Link>
          {userDetails && userDetails.picture && (
            <Link to="/settings">
              <img
                src={userDetails.picture.medium}
                alt={userDetails.name.first}
                className="rounded-[50%] size-[5vh] border border-gray-600"
              />
            </Link>
          )}
        </div>
      </nav>

      <div
        className={`transition-transform ${
          isClicked ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 pt-3 pb-24 px-2 top-[8vh] w-[93%] h-screen bg-[#FFFFFF] border-r border-gray-200 ease-in-out duration-500 flex-col justify-center items-center z-50 overflow-y-scroll`}
      >
        <ul className="space-y-8 flex flex-col items-start px-4 font-bold text-[#1A2024]">
          <li className=" w-[100%] justify-between flex  items-center">
            <p className="text-gray-700 text-[2.4vh]">Categories</p>
            {listClick === false ? (
              <AiOutlinePlus
                className="text-[#8B8B8B] size-[3.3vh]"
                onClick={showList}
              />
            ) : (
              <FiMinus
                className="text-[#8B8B8B] size-[3.3vh]"
                onClick={showList}
              />
            )}
          </li>
          {listClick === true && (
            <div
              className={`flex flex-wrap  w-[100%] h-auto bg-gray-100 rounded-[2vh] justify-center items-center z-50`}
            >
              {products
                .filter((item) => item.id < 13)
                .map((item) => (
                  <img
                    src={item.image}
                    className="size-[9vh] m-4 mix-blend-multiply"
                  />
                ))}
            </div>
          )}

          {lists.map((item) => (
            <li className=" w-[100%] justify-between flex  items-center">
              <p className="text-gray-700 text-[2.4vh]">{item.name}</p>
              <item.icon className="text-[#8B8B8B] size-[3.3vh]" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
