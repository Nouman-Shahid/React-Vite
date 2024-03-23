import React from 'react'
import styles from './Item.module.css'

const Items = ({ itemtext, itemdate }) => {
    return (
        <>
            <div className={`${styles.main} row`}>
                <div className="col-6">
                    <p key={itemtext}>{itemtext}</p>
                </div>
                <div className="col-3">
                    <p key={itemdate}>{itemdate}</p>
                </div>
                <div className={`col-3 ${styles.btn}`}>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Items
