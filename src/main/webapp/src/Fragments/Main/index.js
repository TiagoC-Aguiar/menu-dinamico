import React from 'react'

import NavigationBar from '../NavigationBar'
import Sidebar from '../Sidebar'

import './Main.css'

const Main = () => {
 
  return (
    <div className="main">
      <NavigationBar />  
      <Sidebar />
    </div>
  )
}

export default Main
