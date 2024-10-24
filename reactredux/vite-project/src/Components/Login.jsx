import React, { useState } from 'react'
import { useContext } from 'react'
import usercontext from '../Context/userContext'
const Login = () => {
    const[userName,setuserName]=useState("")
    const[lastname,setlastname]=useState("")
    const changeusername=(e)=>{setuserName(e.target.value)}
    const changelastname=(e)=>{setlastname(e.target.value)}

    const {setuser} = useContext(usercontext)


    const handlesubmit=()=>{
        setuser([userName,lastname])
    }
  return (
    <div>
        <label>FirstName</label>
        <input type='text' name='text' value={userName} onChange={changeusername}/>
        <label>LastName</label>
        <input type='text' name='email' value={lastname} onChange={changelastname}/>
        <button onClick={handlesubmit}>btn</button>
    </div>
  )
}

export default Login