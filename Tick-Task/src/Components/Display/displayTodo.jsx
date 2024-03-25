import React from 'react'
import ListTodo from './Todolists.listTodo.jsx'

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

            {
                list.map((item) => (
                    <ListTodo data={item.data} time={item.time} />
                ))
            }


        </>
    )
}

export default displayTodo
