import React from 'react'

import NavigationBar from '../NavigationBar'
import Sidebar from '../Sidebar'

import './Main.css'

const menusData = [{
  id: 1,
  titulo: 'Home',
  icone: 'faHome',
  link: '/'
},{
  id: 2,
  titulo: 'Cadastro',
  icone: 'faDatabase',
  link: '/cadastro'
},
{
  id: 3,
  titulo: 'Usuario',
  icone: 'faUser',
  link: '#'
}]

const Main = () => {
  return (
    <div className="main">
      <NavigationBar />  
      <Sidebar menus={menusData} />
    </div>
  )
}

export default Main
