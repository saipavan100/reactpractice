import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

function App() {
  const containerStyle = {
    width: '175%',
    boxSizing: 'border-box', // Ensures padding is included in the width
  }

  return (
    <div style={containerStyle}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App




