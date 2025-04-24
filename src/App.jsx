import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from "./components/Footer";
import { Contacto } from './pages/Contacto';
import { Home } from './pages/Home';
import {Reserva} from './pages/Reserva'
import { AdminPage } from "./pages/AdminPage";
import { CartaBar } from "./pages/CartaBar";
import { PlatoPrincipal } from "./pages/PlatoPrincipal";
import Bracket from "./components/Bracket";

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
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/CartaBar" element={<CartaBar />} />
          <Route path="/PlatoPrincipal" element={<PlatoPrincipal />} />
           <Route path="/Bracket" element={<Bracket/>} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
