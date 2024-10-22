import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/storeContext'
const Fooditem = ({id,name,Price,description,image}) => {
  const [itemCount ,setItemCount] = useState(0)
  const {CartItem,addTocart,removeFromCart} = useContext(StoreContext)
  return (
    <div>
      <div className="food-item">
        <div className="food-item-image-conatianer">
            <img className='food-item-img' src={image} alt="" />
            { !itemCount
                 ?<img className="add" onClick={()=> setItemCount(prev => prev+1)} src= {assets.add_icon_white} alt=''/>
                 : <div className="food-item-counter">
                     <img onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                     <p>{itemCount}</p>
                     <img onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                 </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price">$ {Price}</p>
        </div>
      </div>
    </div>
  )
}

export default Fooditem
