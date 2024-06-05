import React from 'react'
import { products } from '../../datas/products'
import HomeCardUi from './HomeCardUi'

function Home() {

  return (

    <div className='w-full grid grid-cols-4 gap-5 p-9  '>
     {products.map((item)=>(
      <HomeCardUi key={item.id} item={item}/>
     ))}
    </div>
  )
}

export default Home
