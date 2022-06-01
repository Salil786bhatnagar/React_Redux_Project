import React from 'react'
import Home from '../components/Home'
export default function Homecontainer() {
  return (
    <div>
     <div className='add-to-cart'>
       <img src='../img/add_to_cart.png' width='50px' height='50px' />
     </div>
      <h3>Home Component</h3>
       <div className='cart-wrapper'>
           <div>
               <img src='../img/m1_img.png' width='70px' height='140px'/>
           </div>
           <div className='text-wrapper-Item'>
               <span>
                  I-Phone
               </span>
               <span>
                  Price: $1000.00 
               </span>
           </div>
           <div className='cart-btn-wrapper'>
               <button className='btn-wrapper'>Add To Cart</button>
           </div>
       </div>
    </div>
  )
}
