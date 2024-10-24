import React from 'react'
import { useState} from 'react';
const Counters = () => {
    const [count, setCount] = useState(0)
    const incre = () => {
      setCount((count1) => {
        return count1 + 1
      })
    };
    
    const decre =()=>{
      setCount(count-1)
    }
    return (
      <>
      <h1>count{count}</h1>
      <button onClick={incre}>Inc</button>
      <button onClick={decre}>Dec</button>
      </>
      
    )
}

export default Counters