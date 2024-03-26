import React, { useState } from 'react'
import styles from './addTodo.module.css'
import { VscAdd } from "react-icons/vsc";


const addTodo = ({ handleOnClick }) => {
    let [itemTodo, setItemTodo] = useState()
    let [itemDate, setItemDate] = useState()

    let handleNameChange = (event) => {
        setItemTodo(event.target.value)
    }
    let handleDateChange = (event) => {
        setItemDate(event.target.value)
    }

    let onClick = () => {
        handleOnClick(itemTodo, itemDate)
        setItemTodo("")
        setItemDate("")
    }



    return (
        <>
            <div className={styles.list}>
                <input type='text' placeholder='Enter Todo' value={itemTodo} onChange={handleNameChange} />
                <input type='date' value={itemDate} onChange={handleDateChange} />
                <button onClick={onClick}> <VscAdd className={styles.img} /> </button>
            </div>
        </>
    )
}

export default addTodo
