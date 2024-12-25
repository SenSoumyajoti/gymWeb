import { useState } from 'react'
import ReactDOM from "react-dom/client";
import './App.css'
import Home from './pages/Home'
import Join from './pages/Join'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/join" element={<Join/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
