import React, { useContext, useState } from 'react'
import { SteteContext } from '../../App'

function BasketCardUi({ item }) {
    const [count,setCount]=useState(item.count)
    const pilusBtn = () => {
setCount(p=>p=count+1)
    }
    const minusBtn = () => {
        setCount(p=>p=count-1)
    }
    return (
        <div className={`flex flex-row self-stretch items-start justify-between px-2 border-b border-gray-200 `}>

            <div className='flex flex-row gap-5 items-center '>
                <input type="checkbox" />
                <img className='w-28 h-28 rounded-lg' src={item.image} alt="" />

                <div className='flex flex-col w-80 items-start gap-[10px]'>
                    <h1 className='text-[#171515] text-4 font-bold '>{item.title}</h1>
                    <h1 className='text-4 font-normal text-[#999] '>Color: {item.color}</h1>
                    <h1 className='text-4 font-normal text-[#999] '>Shop" {item.shop}</h1>
                </div>

            </div>
            <div className='flex flex-row gap-[10px] '>
                <button className='flex flex-col w-[39px]  justify-center items-center rounded-lg bg-[#00B709] text-white text-[30px]  px-5  font-light' onClick={minusBtn}>-</button>
                <h1 className='flex flex-col w-[39px]  justify-center items-center rounded-lg  border-2 border-gray-300  text-[21px]  px-5  font-bold ' >{count}</h1>
                <button className='flex flex-col w-[39px]  justify-center items-center rounded-lg bg-[#00B709] text-white text-[25px]  px-5 font-light ' onClick={pilusBtn}>+</button>
            </div>

            <div className='w-32'>
                <h1 className='text-2xl  font-semibold ' >{item.price} $</h1>

                {
                    count >= 2 ? <h1 className='flex flex-col items-start'>{count}ta Tavar narxi <h1 className='text-black font-semibold'> {count * item.price}$</h1> </h1> : <h1></h1>
                }
            </div>
        </div>
    )
}

export default BasketCardUi
