import React from 'react'
import styles from './rightbar.module.css'
import { FaBirthdayCake } from "react-icons/fa";

const rightbar = () => {
    return (
        <div className={styles.rightnav}>

            <h3>Birthdays</h3>
            <div className={styles.list}> <FaBirthdayCake size='1.5em' color='#3294F6' />  <label>Abubakr's birthday is today.</label></div>

            <hr />

            <h3>Contacts</h3>
            <div className={styles.list}><img src="public/person1.png" style={{ borderRadius: '1vh' }} /> <label>Saad Ahmed</label></div>
            <div className={styles.list}><img src="public/person2.png" style={{ borderRadius: '1vh' }} /> <label>Asim Ali</label></div>
            <div className={styles.list}><img src="public/person3.png" style={{ borderRadius: '1vh' }} /> <label>Haseeb Rajput</label></div>
            <hr />
            <h3>Group conservations</h3>
            <div className={styles.list}><img src="public/soccer.png" style={{ borderRadius: '1vh' }} /> <label>10-D</label></div>
        </div>
    )
}

export default rightbar
