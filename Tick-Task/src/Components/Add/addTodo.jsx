import React from 'react'
import styles from './addTodo.module.css'
const addTodo = ({ handleOnClick }) => {
    return (
        <>
            <form>
                <div className={styles.list}>
                    <input type='text' id='enterTodo' placeholder='Enter Todo' required />
                    <input type='date' required />
                    <button onClick={handleOnClick}>Add</button>
                </div>
            </form>
        </>
    )
}

export default addTodo
