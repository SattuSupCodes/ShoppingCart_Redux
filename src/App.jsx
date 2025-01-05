import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HomePage from './Components/Product'
// kuch bohot fucked up horha rendering mai but abhi keliye rehne dete h
import Navbar from './Components/Navbar'
import ProductCard from './Components/Product_Card'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaymentMethods from './Components/CartPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
       <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = {<ProductCard/>}/>
          <Route path = "/cart" element = {<PaymentMethods/>} />

          
        </Routes>
      </div>
     
      <ProductCard></ProductCard>
      {/* <HomePage></HomePage> */}
      </BrowserRouter>
    
  )
}

export default App
