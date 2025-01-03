import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HomePage from './Components/Product'
// kuch bohot fucked up horha rendering mai but abhi keliye rehne dete h
import Navbar from './Components/Navbar'
import ProductCard from './Components/Product_Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <ProductCard></ProductCard>
      {/* <HomePage></HomePage> */}
      
    </>
  )
}

export default App
