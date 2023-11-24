import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import  BreadCrum  from '../component/breadcrums/BreadCrum'
import { ProductDisplay } from '../component/productdisplay/ProductDisplay'
import DescriptionBox from '../component/descriptionbox/DescriptionBox'
import { RelatedProducts } from '../component/relatedproducts/RelatedProducts'
//import {all_product} from '../new_product'

const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
export default Product
