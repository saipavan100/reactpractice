import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Task}  from './Task'

function App() {

  const incre=()=>{

  }
  const decre=()=>{

  }
  let c = 0
  return (
    <>
    <h1>count : {c}</h1>
    <button onClick={incre}>increment</button>
    <button onClick={decre}>decrement</button>
    </>
 
   
   
  )
}

export default App
