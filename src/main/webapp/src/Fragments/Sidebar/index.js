import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.css'

const Sidebar = () => {
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

  const menuList = menus.map(menu => (    
    <Nav.Item key={menu.id}>      
      <Link className="nav-link" to={menu.link}>
        <FontAwesomeIcon className="nav-icon" icon={icons[menu.icone]} />
        <span className="ml-2">{menu.titulo}</span>
      </Link>
      
    </Nav.Item>
  ))

  return (
    <aside className="main-sidebar">
      <div className="sidebar">
        <Nav className="nav-sidebar flex-column mt-2" variant="pills" >
          {menuList}
        </Nav>
      </div>
    </aside>
  )
}

export default Sidebar
