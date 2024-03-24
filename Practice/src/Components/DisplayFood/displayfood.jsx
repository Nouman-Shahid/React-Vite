import React from 'react'
import Fooditems from '../FoodItems/fooditems.jsx'
import ErrorMessage from '../ErrorMessage/errormessage.jsx'
import styles from './displayfood.module.css'

const displayfood = () => {
    let foodlists = ["Sweets", "Pizza", "Chicken Burger", "Juice", "Noddles", "Sandwiches", "Zinger Burger"]
    //let foodlists = []

    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Tasty Food Items</h2>
            {
                foodlists != ""
                    ?
                    foodlists.map((items) => (
                        <Fooditems key={items} fooditem={items} Btn={() => {
                            console.log(`${items} is being bought`)
                        }} />
                    ))
                    :
                    <ErrorMessage />
            }
        </div>
    )
}

export default displayfood
