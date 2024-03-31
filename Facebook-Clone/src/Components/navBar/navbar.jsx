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


const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState('btn1');

    const handleOnClick = (btnId) => {
        setActiveBtn(btnId);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <img src="public/fbLogo.png" alt="Facebook Logo" />
                <input type='text' placeholder='Search Facebook' />
            </div>

            <div className={styles.center}>
                <button style={{ color: activeBtn === 'btn1' ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick('btn1')}>
                    <GoHome size="1.7em" />
                </button>
                <button style={{ color: activeBtn === 'btn2' ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick('btn2')}>
                    <BsPeople size="1.7em" />
                </button>
                <button style={{ color: activeBtn === 'btn3' ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick('btn3')}>
                    <AiTwotoneShop size="1.7em" />
                </button>
                <button style={{ color: activeBtn === 'btn4' ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick('btn4')}>
                    <IoPeopleCircleOutline size="1.8em" />
                </button>
                <button style={{ color: activeBtn === 'btn5' ? '#0866ff' : '#b8bbbf' }} onClick={() => handleOnClick('btn5')}>
                    <RiGamepadLine size="1.8em" />
                </button>
            </div>

            <div className={styles.right}>

                <button ><BsFillGrid3X3GapFill size='1.3em' color='#c6cace' /> </button>
                <button><FaFacebookMessenger size='1.3em' color='#c6cace' /> </button>
                <button><RiNotification4Fill size='1.3em' color='#c6cace' /> </button>
                <img src="public/user.png" />


            </div>
        </nav>
    );
}

export default Navbar;
