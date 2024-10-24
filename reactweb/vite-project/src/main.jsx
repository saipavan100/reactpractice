import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/home",
        element : <Home/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
