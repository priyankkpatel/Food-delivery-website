import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/storeContext'
import { food_list } from '../../assets/assets'
import Fooditem from '../FoodItem/Fooditem'

const FoodDisplay = ({category} ) => {
    
const { Food_list } = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>TopDishes Near You</h2>
      <div className="food-display-list">

      { food_list.map((item , index )=>{

        {console.log(category,item.category)}
        if (category === "All" || category === item.category) {
          return <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} Price={item.price}/>
        }
        
      })}
      </div>

    </div>
  )
}

export default FoodDisplay
