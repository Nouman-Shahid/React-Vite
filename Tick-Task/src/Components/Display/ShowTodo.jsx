import React from 'react'
import Items from '../Items/Item.jsx'

let ShowTodo = ({ list }) => {
    return (
        <>

            {
                list.map((item) => (
                    <Items key={item.text} itemtext={item.text} itemdate={item.date} />
                ))
            }



        </>
    )
}

export default ShowTodo
