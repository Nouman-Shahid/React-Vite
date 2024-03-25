import React, { useState } from 'react'
import ListTodo from '../Todolists/listTodo'
import Heading from '../Title/title'
import AddTodo from '../Add/addTodo'
import styles from './display.module.css'
import ErrorMsg from '../ErrorMsg/errormsg'

const displayTodo = () => {

    let [lists, setlist] = useState("")

    let addTodoList = (event) => {

        if (event.target.innerHTML == 'Add') {
            console.log(event.target.value)
        }
    }

    lists = [
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
                <AddTodo handleOnClick={addTodoList} />

                {
                    lists != ""
                        ?
                        lists.map((item) => (
                            <ListTodo key={item.data} time={item.time} data={item.data} />
                        ))

                        :
                        <ErrorMsg />
                }
            </div>
        </>
    )
}

export default displayTodo
