import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import HotDrinks from "./pages/menu/HotDrinks";
import ColdDrinks from "./pages/menu/ColdDrinks";
import Pastries from "./pages/menu/Pastries";
import MenuItem from "./pages/MenuItem";

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Nested routes Menu */}
        <Route path="/menu" element={<Menu />}>
          <Route path="hot" element={<HotDrinks />} />
          <Route path="cold" element={<ColdDrinks />} />
          <Route path="pastries" element={<Pastries />} />
          <Route path=":itemName" element={<MenuItem />} /> {/* Dynamic route */}
        </Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/reviews"
          element={
            <ProtectedRoutes>
              <Reviews />
            </ProtectedRoutes>
          }
        />
        {/* Protected route */}
        <Route
          path="/reviews"
          element={
            <ProtectedRoutes>
              <Reviews />
            </ProtectedRoutes>
          }
        />

        <Route path="*" element={<NotFound />} /> {/* 404 page*/}
      </Routes>
    </Router>
  );
}
