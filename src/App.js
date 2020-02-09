import React from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/suites/" component={Rooms} />
        <Route exact path="/suites/:param" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

