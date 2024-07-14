import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'
import "./App.css"

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
