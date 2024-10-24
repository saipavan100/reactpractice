import React, { useState } from 'react'
import usercontext from './userContext'
const UseContextprovider = ({children}) => {
    const[user,setuser]=useState([])
  return (
       <usercontext.Provider value={{user,setuser}}>
        {children}
       </usercontext.Provider> 
  )
}

export default UseContextprovider