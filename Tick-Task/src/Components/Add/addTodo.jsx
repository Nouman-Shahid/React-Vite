import React from 'react'
import styles from './addTodo.module.css'
const addTodo = () => {
    return (
        <>
            <div className={styles.list}>
                <input type='text' placeholder='Enter Todo' />
                <input type='date' />
                <button>Add</button>
            </div>
        </>
    )
}

export default addTodo
