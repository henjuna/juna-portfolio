import { useState } from 'react';
import './App.css';
import './index.css';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/NavBar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function MainPortfolio() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Router basename="/juna-portfolio">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
