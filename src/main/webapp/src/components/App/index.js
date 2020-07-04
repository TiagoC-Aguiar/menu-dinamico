import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from '../../routes'
import Main from '../../Fragments/Main'
// import Home from '../Home'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
        <div className="content">
          <Routes />
        </div>

      </div>
    </Router>
  )
}

export default App
