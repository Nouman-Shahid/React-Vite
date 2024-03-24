import React from 'react'
import styles from './foodinput.module.css'

const foodinput = ({ Handlekeydown }) => {
    return (
        <>
            <div className={`${styles.input} input-group mb-3`} >
                <input type="text" className="form-control" placeholder="Enter food item" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyDown={Handlekeydown} />
            </div>

        </>
    )
}

export default foodinput
