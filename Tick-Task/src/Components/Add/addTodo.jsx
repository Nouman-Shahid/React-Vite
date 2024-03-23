import React from 'react'
import styles from './addTodo.module.css'

const addTodo = () => {
    return (
        <>
            <div classNameName={`${styles.main} row`}>
                <div classNameName="col-6">
                    <input type="text" classNameName={`${styles.input} w-75`} placeholder='Enter a todo' />
                </div>
                <div classNameName="col-3">
                    <input type="date" classNameName={`${styles.input} w-100`} />
                </div>
                <div classNameName={`${styles.btn} col-3`}>
                    <button type="button" classNameName="btn btn-success">Add</button>
                </div>
            </div>
        </>
    )
}

export default addTodo
