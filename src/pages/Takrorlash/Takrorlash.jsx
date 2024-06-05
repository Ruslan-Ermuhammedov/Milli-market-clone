import React, { useContext, useEffect, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SteteContext } from '../../App';
import axios from 'axios';
import TakrorlashUi from './TakrorlashUi';

function Takrorlash() {
    const { query, setQuery, bronHotel, setBronHotel } = useContext(SteteContext)
    const [hotelsApi, setHotelsApi] = useState([])
    useEffect(() => {
        function fetchData() {
            axios.get(` http://engine.hotellook.com/api/v2/lookup.json?query=${query}`)
                .then((res) => setHotelsApi(res.data?.results?.hotels))
                .catch((err) => console.log("hatolik bor"))
        }
        if (query) fetchData()
    }, [query]);
    console.log(hotelsApi)
    return (
        <div className=''>
            {
                <TakrorlashUi hotelsApi={hotelsApi} />
            }


            <div className='grid grid-cols-3 gap-20'>
                {bronHotel.map((item) => (
                    <div className=' flex flex-row gap-10 bg-blue-400 rounded-lg w-96 h-48 items-center '>
                        <h1>{item?.label}</h1>
                        <h1>{item?.fullName}</h1>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Takrorlash
