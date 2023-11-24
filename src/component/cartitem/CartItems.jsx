
import React, { useContext } from 'react'
import './cartitem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_products from '../../new_product'
import all_product from '../../new_product'

export const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart}
    = useContext(ShopContext)
    
    return (
    <div className='cartitem'>
        <div className='cartitem-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
        if(cartItems[e.id]>0)
            {
            return  <div>
                <div className='cartitem-format cartitem-format-main' >
                    <img src={e.image} alt='' className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} 
                        onClick={() =>{removeFromCart(e.id)}} alt='' />
                </div>
                <hr />
                </div> 
            }
                return null;
            
        })}
            <div className='cartitem-down'>
            <div className='cartitem-total'>
                <h1>Cart Total</h1>
                <div>
                <div className='cartitem-total-item'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount}</p>
            </div>
        <hr />
        <div className='cartitem-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
            <h1>Total</h1>
            <h3>${0}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKED</button>
            </div>
        <div className='cartitem-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitem-promobox'>
                <input type='text' placeholder='promo code' />
                <button>Submit</button>
            </div>
            </div>  
         </div>
        </div>
  )
}
export default CartItems
