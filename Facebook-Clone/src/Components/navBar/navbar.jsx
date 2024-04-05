import React, { useState } from 'react';
import styles from './navbar.module.css';
import { GoHome } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { AiTwotoneShop } from "react-icons/ai";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidHeartCircle } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { SiFacebookgaming } from "react-icons/si";
import { GiSwipeCard } from "react-icons/gi";

const Navbar = ({ firstname, lastname, img, handleAPI }) => {
    const [activeBtn, setActiveBtn] = useState('btn1');

    const [isClicked, setIsClicked] = useState(false)

    const handleOnClick = (btnId) => {
        setActiveBtn(btnId);
    }

    const handleToggle = () => {
        setIsClicked(!isClicked)
    }

    let icons = [
        {
            id: 'btn1',
            size: '1.7em',
            icon: GoHome,
        },
        {
            id: 'btn2',
            size: '1.7em',
            icon: BsPeople,
        },
        {
            id: 'btn3',
            size: '1.7em',
            icon: AiTwotoneShop,
        },
        {
            id: 'btn4',
            size: '1.8em',
            icon: IoPeopleCircleOutline,
        },
        {
            id: 'btn5',
            size: '1.8em',
            icon: RiGamepadLine,
        },

    ]

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <img src="public/fbLogo.png" alt="Facebook Logo" />
                <input type='text' placeholder='Search Facebook' />
            </div>

            <div className={styles.center}>

                {
                    icons.map((item) => (
                        <button style={{ color: activeBtn === item.id ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick(item.id)}>
                            <item.icon size={item.size} />
                        </button>
                    ))
                }

            </div>

            <div className={styles.right}>

                <button><BsFillGrid3X3GapFill size='1.3em' color='#c6cace' /> </button>
                <button><FaFacebookMessenger size='1.3em' color='#c6cace' /> </button>
                <button><RiNotification4Fill size='1.3em' color='#c6cace' /> </button>
                <img src={img} className='randomImg' onClick={handleToggle} />

            </div>

            {
                (isClicked === true) &&
                <div className={styles.profile}>

                    <div className={styles.container}>
                        <div className={styles.list}> <img src={img} className='randomImg' />
                            <label>{`${firstname} ${lastname}`}</label>
                        </div>
                        <hr />

                        <button onClick={handleAPI}>Switch Profile</button>
                    </div>

                    <div className={styles.list2}><IoStatsChartSharp size='1.3em' color='#1a79df' /> <label>Ads Manager</label></div>
                    <div className={styles.list2}><BiSolidCalendarStar size='1.3em' color='#F0ACB9' /> <label >Events</label></div>
                    <div className={styles.list2}><BiSolidHeartCircle size='1.3em' style={{ backgroundColor: 'red', borderRadius: '5vh' }} color='#F7C74D' /> <label >Fundraisers</label></div>
                    <div className={styles.list2}><SiFacebookgaming size='1.2em' color='#3CB5F0' /> <label >Gaming Videos</label></div>
                    <div className={styles.list2}><GiSwipeCard size='1.3em' color='#1D3963' /> <label >Orders and payments</label></div>

                </div>

            }
        </nav>
    );
}

export default Navbar;
