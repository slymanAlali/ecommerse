import React from 'react'
import './relatedproducts.css'
import data_product from '../../data/data'
import Item from '../items/Item'



export const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Product</h1>
        <hr />
        <div className='relatedProducts-item'>
            {data_product.map((item,i)=>{
            return <Item
            key={i} 
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
             />
            })}
            </div>
    </div>
  )
}
