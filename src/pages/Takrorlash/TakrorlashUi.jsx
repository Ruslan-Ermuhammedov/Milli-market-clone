import React, { useContext } from 'react'
import { SteteContext } from '../../App'
import TakrorlashUiCard from './TakrorlashUiCard'

function TakrorlashUi({ hotelsApi }) {
  const { query, setQuery, bronHotel, setBronHotel } = useContext(SteteContext)
 
  return (
    <div>
      <div className='grid grid-cols-5 p-5'>
        {hotelsApi.map((item) => (
          <TakrorlashUiCard  item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default TakrorlashUi
