import React from 'react'
import styles from './listTodo.module.css'

const listTodo = ({ data, time }) => {
    return (
        <>

            <div className={styles.list}>
                <input type='text' value={data} disabled />
                <input type='text' value={time} disabled />
                <button>Delete</button>
            </div>

        </>
    )
}

export default listTodo
