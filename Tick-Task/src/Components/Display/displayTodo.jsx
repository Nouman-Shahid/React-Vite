import React, { useState } from 'react'
import ListTodo from '../Todolists/listTodo'
import Heading from '../Title/title'
import AddTodo from '../Add/addTodo'
import styles from './display.module.css'
import ErrorMsg from '../ErrorMsg/errormsg'

const displayTodo = () => {

    let [lists, setlist] = useState([])

    let addTodoList = (todo, date) => {

        let newlists = [...lists, {
            data: todo,
            time: date,
        }]
        setlist(newlists)
    }
    let deleteTodoList = (todoItemName) => {

        const newarr = lists.filter((item) => (item.data !== todoItemName))
        setlist(newarr)
    }

    return (
        <>
            <div className={`${styles.main}`}>

                <Heading />
                <AddTodo handleOnClick={addTodoList} />

                {
                    lists.length !== 0
                        ?
                        lists.map((item) => (
                            <ListTodo key={item.data} time={item.time} data={item.data} handleDelete={deleteTodoList} />
                        ))

                        :
                        <ErrorMsg />
                }
            </div>
        </>
    )
}

export default displayTodo
