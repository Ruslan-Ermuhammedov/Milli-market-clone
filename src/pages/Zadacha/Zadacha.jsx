import React, { useState } from 'react'
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

function Zadacha() {
    const images = ["https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2023/07/29/12/6085066/2af991735fffed9f83fd876678fcd876101eed8a.jpg",
        "https://www.motortrend.com/uploads/2021/09/001-chevy-camaro-driver-front-three-quarter.jpg",
        "https://robbreport.com/wp-content/uploads/2023/02/invaut04.jpg?w=1000",
        "https://s0.rbk.ru/v6_top_pics/media/img/8/51/755990290900518.jpg",
        "https://quto.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/12/09/08/5085897/2af7cd513e36ba8eea6283269e88860eee29c1d0.jpg"
    ]
    const [son, setSon] = useState(0)
    const oldinga = () => {
        if (son === images.length-1) {
            setSon(0)
        }
        else {
            setSon(p => p = son + 1)
        }
    }
 
    const orqaga = () => {
        if (son === 0) {
            setSon(images.length-1)
        }
        else {
            setSon(p => p = son - 1)
        }
    }
    return (
        <div>

            <div className=' flex flex-row gap-10  mt-10 ml-20 items-center'>
                <button className='text-4xl bg-slate-200 h-12 w-9 rounded-xl' onClick={orqaga}><VscChevronLeft /></button>

                <img className='w-80 h-60 rounded-2xl' src={images[son]} alt="" />

                <button className='text-4xl bg-slate-200 h-12 w-9 rounded-xl' onClick={oldinga}><VscChevronRight /></button>

            </div>

        </div>
    )
}

export default Zadacha
