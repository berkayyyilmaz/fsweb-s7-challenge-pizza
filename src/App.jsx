import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Home from './pages/home/Home.jsx'
import Order from './pages/order/Order.jsx'
import { Switch, Route} from 'react-router-dom'
import Success from './pages/success/Success.jsx'

function App() {

  return (
    <>
  <Switch>
    <Route path='/order'>
      <Order />
    </Route>
    <Route path='/' exact>
      <Home />
    </Route>
    <Route path='/siparisalindi' >
      <Success />
    </Route>
  </Switch>


</>
  )
};

export default App
