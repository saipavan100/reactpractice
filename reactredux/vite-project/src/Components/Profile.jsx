import React from 'react'
import { useContext } from 'react'
import usercontext from '../Context/userContext'

const Profile = () => {
    const {user} = useContext(usercontext)
    console.log(user);
    
  return (
    <div>My name is  {user}</div>
  )
}

export default Profile