import React from 'react'
import Header from './Header'
import Footer from './Footer' 
import {Outlet} from "react-router-dom"

const Root = () => {
  const containerStyle = {
    width: '175%',
    boxSizing: 'border-box', // Ensures padding is included in the width
  }

  return (
    <div style={containerStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root