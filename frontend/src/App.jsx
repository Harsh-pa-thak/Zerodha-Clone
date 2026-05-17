import { useState } from 'react'
import './App.css'
import Home from './landing_page/home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import Pricing from './landing_page/pricing/Pricing';
import Product from './landing_page/product/Product';
import Support from './landing_page/support/Support';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
