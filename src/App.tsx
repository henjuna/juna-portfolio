import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  HashRouter,
  useLocation,
} from 'react-router-dom';
import './App.css';
import './index.css';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/NavBar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { getAuth } from 'firebase/auth';
import { loadMainData } from './API/main';
import { useMainPageStore } from './store/MainPage.store';

function MainPortfolio() {
  const location = useLocation();
  const store = useMainPageStore();

  useEffect(() => {
    if (store.hasUpdated) {
      loadMainData();
      store.setHasUpdated(false);
    }
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'L') {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          navigate('/dashboard');
        } else {
          navigate('/login');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
