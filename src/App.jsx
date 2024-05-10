import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Home from './pages/home/Home.jsx'
import './pages/home/Home.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home>
    </Home>
    </>
  )
};

export default App
