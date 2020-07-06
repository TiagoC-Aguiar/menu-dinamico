import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavigationBar from '../NavigationBar'
import Sidebar from '../Sidebar'

import './Main.css'

const Main = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {  
    loadMenus()
  }, [])

  const loadMenus = () => {
    console.log('renderiza menu')  
    return axios.get('menus').then(response => {
      setMenus(response.data)
    }).catch(err => {
      console.log('*** errou')
      console.log(err)
    })
  }

  return (
    <div className="main">
      <NavigationBar />  
      <Sidebar menus={menus} />
    </div>
  )
}

export default Main
