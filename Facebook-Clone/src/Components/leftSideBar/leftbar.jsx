import React, { useState } from 'react'
import styles from './leftbar.module.css'
import { FaUserFriends } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiTwotoneShop } from "react-icons/ai";
import { FcFeedback } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidHeartCircle } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { SiFacebookgaming } from "react-icons/si";
import { GiSwipeCard } from "react-icons/gi";




const leftbar = () => {

    const [isClicked, setIsClicked] = useState(false)

    let handleOnClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <div className={styles.sidenav}>

            <div className={styles.list}> <img src="public/user.png" /> <label>Numan Shahid</label></div>
            <div className={styles.list}> <FaUserFriends size='1.5em' color='#1a82f5' />  <label>Friends</label></div>
            <div className={styles.list}><FaFlag size='1.3em' color='#ea562a' /> <label >Pages</label></div>
            <div className={styles.list}><FaClock size='1.2em' color='#f9f9fb' /> <label>Memories</label></div>
            <div className={styles.list}><FaBookmark size='1.3em' color='#be45c5' /><label >Saved</label></div>
            <div className={styles.list}><IoPeopleCircleOutline size='1.3em' color='#1a79df' /> <label>Groups</label></div>
            <div className={styles.list}><AiTwotoneShop size='1.3em' color='#1a82f5' /> <label >Marketplaces</label></div>
            <div className={styles.list}><FcFeedback size='1.3em' /> <label >Feeds</label></div>


            {
                (isClicked == true) ?
                    <>
                        <div className={styles.list}><IoStatsChartSharp size='1.3em' color='#1a79df' /> <label>Ads Manager</label></div>
                        <div className={styles.list}><BiSolidCalendarStar size='1.3em' color='#F0ACB9' /> <label >Events</label></div>
                        <div className={styles.list}><BiSolidHeartCircle size='1.3em' style={{ backgroundColor: 'red', borderRadius: '5vh' }} color='#F7C74D' /> <label >Fundraisers</label></div>
                        <div className={styles.list}><SiFacebookgaming size='1.2em' color='#3CB5F0' /> <label >Gaming Videos</label></div>
                        <div className={styles.list}><GiSwipeCard size='1.3em' color='#1D3963' /> <label >Orders and payments</label></div>
                        <div className={styles.list} onClick={handleOnClick}><MdKeyboardArrowUp size='1.3em' className={styles.arrowbtn} /> <label >See Less</label></div>
                    </>

                    : <div className={styles.list} onClick={handleOnClick}><MdKeyboardArrowDown size='1.3em' className={styles.arrowbtn} /> <label >See More</label></div>
            }

            <hr />

            <h3>Your Shortcuts</h3>
            <div className={styles.list}><img src="public/8ballpool.png" style={{ borderRadius: '1vh' }} /> <label>8 Ball Pool</label></div>
            <div className={styles.list}><img src="public/soccer.png" style={{ borderRadius: '1vh' }} /> <label>Soccer Stars</label></div>

            <p>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</p>
        </div>
    )
}

export default leftbar
