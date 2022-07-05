import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css"
import NavBar from './components/navbar'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  )
}

export default App