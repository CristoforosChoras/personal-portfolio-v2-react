import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> }  />
        <Route path="/contact" element={ <ContactPage /> }  exact/>
      </Routes>
    </Router>
  );
}

export default App;
