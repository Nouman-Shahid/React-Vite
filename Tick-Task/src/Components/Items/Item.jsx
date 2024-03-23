import React from 'react'
import styles from './Item.module.css'

const Items = ({ itemtext, itemdate }) => {
    return (
        <>
            <div classNameName={`${styles.main} row`}>
                <div classNameName="col-6">
                    <p key={itemtext}>{itemtext}</p>
                </div>
                <div classNameName="col-3">
                    <p key={itemdate}>{itemdate}</p>
                </div>
                <div classNameName={`col-3 ${styles.btn}`}>
                    <button type="button" classNameName="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Items
