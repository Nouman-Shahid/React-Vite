import React, { useState } from 'react'
import Fooditems from '../FoodItems/fooditems.jsx'
import ErrorMessage from '../ErrorMessage/errormessage.jsx'
import FoodInput from '../FoodInput/foodinput.jsx'
import styles from './displayfood.module.css'

const displayfood = () => {

    let [foodlists, setfoodlist] = useState("")

    const onkeydown = (event) => {
        if (event.key === 'Enter') {
            let newitem = event.target.value
            event.target.value = ""
            let newarr = [...foodlists, newitem]
            setfoodlist(newarr)
        }
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Tasty Food Items</h2>
            <FoodInput Handlekeydown={onkeydown} />
            {
                foodlists != ""
                    ?
                    foodlists.map((items) => (
                        <Fooditems key={items} fooditem={items} />
                    ))
                    :
                    <ErrorMessage />
            }
        </div>
    )
}

export default displayfood
