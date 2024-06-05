import React, { useContext } from 'react'
import { SteteContext } from '../../App'

function TakrorlashUiCard({ item }) {
    const { query, setQuery, bronHotel, setBronHotel } = useContext(SteteContext)
console.log(bronHotel)
    const NewBron = {
        fullName:item?.fullName,
        label:item?.label,
        id:item.id
    }
    const Bron = () => {
        setBronHotel([...bronHotel,NewBron])
    }
    return (

        <div className='flex flex-col p-6 rounded-xl w-60 bg-slate-200 items-start ' key={item?.id}>
            <h1>{item?.label}</h1>
            <h1>{item?.fullName}</h1>
            <button onClick={Bron} className='bg-blue-500 text-white rounded-lg px-8 py-2 mt-5'>Bron</button>
        </div>

    )
}

export default TakrorlashUiCard
