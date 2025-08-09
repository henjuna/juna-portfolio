import { useEffect, useState } from 'react';
import type { NavbarPropsType } from '../types/NavBar.types';
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth';
import { useNavigate, type NavigateFunction } from 'react-router-dom';

/**
 * Scrolls to a specific section of the page.
 * @param {string} id
 * @param {NavigateFunction} navigate
 */
const scrollToSection = async (id: string, navigate: NavigateFunction) => {
  if (location.hash.includes('dashboard') || location.hash.includes('login')) {
    navigate('/', { state: { scrollTo: id } });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'auto' });
  }
};

/**
 * Handles user logout and redirects to the home page.
 * @param {Auth} auth
 * @param {NavigateFunction} navigate
 */
const handleLogout = async (auth: Auth, navigate: NavigateFunction) => {
  try {
    await signOut(auth);
    navigate('/');
  } catch {
    alert('Sign out failed. Please try again.');
  }
};

export const Navbar = ({ menuOpen, setMenuOpen }: NavbarPropsType) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            onClick={() => scrollToSection('home', navigate)}
            className="font-mono text-xl font-bold text-white"
          >
            Hen<span className="text-blue-500">Juna</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection('home', navigate)}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>

            <a
              onClick={() => scrollToSection('about', navigate)}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>

            <a
              onClick={() => scrollToSection('projects', navigate)}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>

            <a
              onClick={() => scrollToSection('contact', navigate)}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>

            {user && (
              <>
                <a
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/dashboard', { state: { fromMobile: false } });
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dashboard
                </a>
                <button
                  onClick={() => {
                    handleLogout(auth, navigate);
                  }}
                  className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
