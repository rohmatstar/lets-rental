import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import Detail from './components/detail.component'
import Signup from './components/signup.component'
import Homepage from './components/homepage.component'

function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
    </Router>
  )
}
export default App