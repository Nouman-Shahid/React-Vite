import React from 'react'
import styles from './addTodo.module.css'

const addTodo = () => {
    return (
        <>
            <div className={`${styles.main} row`}>
                <div className="col-6">
                    <input type="text" className={`${styles.input} w-75`} placeholder='Enter a todo' />
                </div>
                <div className="col-3">
                    <input type="date" className={`${styles.input} w-100`} />
                </div>
                <div className={`${styles.btn} col-3`}>
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        </>
    )
}

export default addTodo
