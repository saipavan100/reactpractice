import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseContextprovider from './Context/UseContextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseContextprovider>
      <h1>hello</h1>
      <Login/>
      <Profile/>
    </UseContextprovider>

   
  )
}

export default App
