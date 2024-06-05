import React, { useContext, useReducer, useState } from 'react'
import { SteteContext } from '../../App'
import BasketCardUi from './BasketCardUi'
function Basket() {
  const { basketState, basketDispatch } = useContext(SteteContext)
  const allPrice = basketState.basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`flex flex-row gap-7 px-[87px] py-7   `}>

      {/* mahsulotlar qismi */}
      <div className={` ${"border border-gray-300"} rounded-xl min-h-20 w-full px-6 py-3`}>
<div className='flex flex-row items-center justify-between'>
  <div className='flex flex-row gap-3 '>
    <input type="checkbox" className='p-[10px] w-4' />
    <h1 className='text-2xl font-semibold'>All products</h1>
  </div>
  <button>Delete</button>
</div>

        {basketState.basket.map((item) => (
<div className='flex flex-col gap-4 p-4 '>

          <BasketCardUi item={item} key={item.id} />
</div>


        ))}
      </div>

      {/* hisobotlar qismi */}
      <div className='  p-3 border border-gray-300 rounded-xl min-h-20 max-h-72 w-[430px]'>
        <div className='flex flex-col gap-7 px-7 py-5'>
          <div className='flex flex-row gap-4 items-center'>
            <h1 className='text-3xl font-bold'>Jami: </h1>
            <h1 className='text-2xl font-semibold text-[#00B709] pt-2'>{allPrice} $</h1>
          </div>
          <p className='text-[16px] font-bold text-[#999]'>Jami Tavar: {basketState.basket.length} ta</p>
          <button className='px-4 py-2 bg-[#00B709] rounded text-white text-[16px]'>Tastiqlash</button>
          <div className='flex flex-row gap-2'>
            <input type="checkbox" className='w-7 ' />
            <p className='text-[12px] '>Согласен с условиями правил пользования торговой </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Basket
