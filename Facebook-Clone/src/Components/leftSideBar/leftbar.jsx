import React from 'react'
import styles from './leftbar.module.css'
import { FaUserFriends } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiTwotoneShop } from "react-icons/ai";
import { FcFeedback } from "react-icons/fc";




const leftbar = () => {
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

        </div>
    )
}

export default leftbar
