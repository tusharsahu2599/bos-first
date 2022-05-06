import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import HotelDetail from './components/HotelDetail'
import AddHotels from './components/AddHotels'
// import {BrowseRouter ,Route, Routes} from 'react-router'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<HotelDetail />} />
        <Route path="/listing/create" element={<AddHotels />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
