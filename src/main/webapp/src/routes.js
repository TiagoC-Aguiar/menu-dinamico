import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Cadastro from './components/Cadastro'

export default function Routes() {

  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastros" component={Cadastro} />

      </Switch>
  )
}
