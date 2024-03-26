import React from 'react'
import { VscRemove } from "react-icons/vsc";
import styles from './listTodo.module.css'

const listTodo = ({ data, time, handleDelete }) => {
    return (
        <>

            <div className={styles.list}>
                <input type='text' value={data} disabled />
                <input type='text' value={time} disabled />
                <button onClick={() => handleDelete(data)}><VscRemove className={styles.img} /></button>
            </div>

        </>
    )
}

export default listTodo
