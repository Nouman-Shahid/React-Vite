import React from 'react'
import Items from '../Items/Item.jsx'

let ShowTodo = ({ list }) => {
    return (
        <>

            {
                list.map((item) => (
                    <Items itemtext={item.text} itemdate={item.date} />
                ))
            }



        </>
    )
}

export default ShowTodo
