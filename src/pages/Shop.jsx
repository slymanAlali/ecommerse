import React from 'react'
import { Hero } from '../component/hero/Hero'
import { Popular } from '../popular/Popular'
import Offers from '../component/offers/Offers'
import NewCollections from '../component/newcollection/NewCollections'
import NewsLetter from '../component/newsletter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}
