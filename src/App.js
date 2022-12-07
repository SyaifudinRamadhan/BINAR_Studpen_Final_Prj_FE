// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Checkin from './pages/Checkin'
import HasilCheckin from './pages/HasilCheckin'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkin' element={<Checkin />} />
        <Route path='/hasilcheckin' element={<HasilCheckin />} />
      </Routes>
      <Footer />
      {/* <Header/>
      <Navbar />
      <Dashboard />
      <Footer/> */}
    </BrowserRouter>
  )
}

export default App
