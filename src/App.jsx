import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from "./components/Footer";
import { Contacto } from './pages/Contacto';
import { Home } from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css"

function App() {
  return (
    <>
    <div className="mx-2 my-2 ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
