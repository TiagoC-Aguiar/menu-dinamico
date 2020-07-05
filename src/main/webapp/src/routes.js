import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Cadastro from './components/Cadastro'

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/cadastro" component={Cadastro} />

      </Switch>
  )
}
