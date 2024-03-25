import React from 'react'

const listTodo = ({ data, time }) => {
    return (
        <>

            <div className="main">
                <ul>
                    <li>{data} {time}</li>
                </ul>
            </div>

        </>
    )
}

export default listTodo
