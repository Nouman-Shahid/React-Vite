import React from 'react'
import styles from './rightbar.module.css'
import { FaBirthdayCake } from "react-icons/fa";

const rightbar = ({ lastname, group }) => {

    let friends = [
        {
            name: 'Saad Ahmed',
            img: 'public/person1.png'
        },
        {
            name: 'Asim Ali',
            img: 'public/person2.png'
        },
        {
            name: 'Haseeb Rajput',
            img: 'public/person3.png'
        },
    ]

    return (
        <div className={styles.rightnav}>

            <h3>Birthdays</h3>
            <div className={styles.list}> <FaBirthdayCake size='1.5em' color='#3294F6' />
                <label>{`${lastname}'s birthday is today.`}</label></div>

            <hr />

            <h3>Contacts</h3>

            {
                friends.map((item) => (
                    <div className={styles.list}><img src={item.img} style={{ borderRadius: '1vh' }} /> <label>{item.name}</label></div>
                ))
            }

            <hr />
            <h3>Group conservations</h3>
            <div className={styles.list}><img src="public/soccer.png" style={{ borderRadius: '1vh' }} /> <label>{group}</label></div>
        </div>
    )
}

export default rightbar
