import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar className="main-header justify-content-between" bg="light">
      <Nav>
        <Nav.Link href="#">
          <FontAwesomeIcon icon={faBars} />
        </Nav.Link>        
        <Navbar.Brand className="ml-2">
          Menu - Dinâmico
        </Navbar.Brand>

      </Nav>

      <Nav.Link href="#1">
        <FontAwesomeIcon icon={faUser} color="rgba(0,0,0,.5)" />
      </Nav.Link>

    </Navbar>
  )
}

export default NavigationBar
