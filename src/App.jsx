import { createContext, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './loyaut/Header/Header'
import Home from './pages/Home/Home'
import Basket from './pages/Basket/Basket'
import { basketInitialState, basketReducer } from './reducer/basketreducer/basketreducer'
import Zadacha from './pages/Zadacha/Zadacha'
import Galereya from './pages/Galereya/Galereya'
import Takrorlash from './pages/Takrorlash/Takrorlash'

export const SteteContext = createContext()
function App() {
  const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState)
  const [query,setQuery]=useState("toshkent")
  const [bronHotel,setBronHotel]=useState([])
  console.log(basketState.basket)
  return (
    <>
      <SteteContext.Provider value={{ basketState, basketDispatch,query,setQuery,bronHotel,setBronHotel }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='basket' element={<Basket />} />
          <Route path='takrorlash' element={<Takrorlash/>} />
          <Route path='galereya' element={<Galereya/>} />
        </Routes>
      </SteteContext.Provider>
    </>
  )
}

export default App
