import React from 'react'
import ListTodo from '../Todolists/listTodo'
import Heading from '../Title/title'
import AddTodo from '../Add/addTodo'
import styles from './display.module.css'

const displayTodo = () => {

    let list = [
        {
            data: "Go to Gym",
            time: "22/03/2024",
        },
        {
            data: "Do Shopping",
            time: "24/03/2023",
        },
    ]
    return (
        <>
            <div className={`${styles.main}`}>
                <Heading />
                <AddTodo />

                {
                    list.map((item) => (
                        <ListTodo time={item.time} data={item.data} />
                    ))
                }
            </div>
        </>
    )
}

export default displayTodo
