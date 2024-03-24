import React from 'react'
import styles from './fooditems.module.css'

const fooditems = ({ fooditem }) => {


    return (
        <main className={styles.main}>
            <ul className={`list-group ${styles.ul}`}>
                <li className={`list-group-item ${styles.li}`}>{fooditem}
                    <button type="button" className={`btn btn-primary btn-sm ${styles.btn}`}>Purchase</button>
                </li>

            </ul>
        </main>
    )
}

export default fooditems
