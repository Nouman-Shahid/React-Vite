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
import { MdSettings } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

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

    let profileBtn = [
        {
            name: 'Settings & privacy',
            icon: MdSettings,
        },
        {
            name: 'Help & support',
            icon: IoMdHelpCircle,
        },
        {
            name: 'Display & accessibility',
            icon: IoMdMoon,
        },
        {
            name: 'Give feedback',
            icon: RiFeedbackFill,
        },
        {
            name: 'Log Out',
            icon: IoLogOut,
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
                        <button key={item.id} style={{ color: activeBtn === item.id ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick(item.id)}>
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


                    {
                        profileBtn.map((item) => (
                            <div key={item.name} className={styles.list2}><item.icon className={styles.btn} size='1.5em' color='#E4E6EA' />
                                <label>{item.name}</label></div>
                        ))
                    }

                </div>

            }
        </nav>
    );
}

export default Navbar;
