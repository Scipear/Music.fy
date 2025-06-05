import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import ListenedPage from './views/ListenedPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mainPage" element={<MainPage/>} />
        <Route path="/recently-listened" element={<ListenedPage />} />
      </Routes>
    </Router>
  )
}

export default App
