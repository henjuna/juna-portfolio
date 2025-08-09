import type { NavbarPropsType } from '../types/NavBar.types';
import { useEffect, useState } from 'react';
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

export const MobileMenu = ({ menuOpen, setMenuOpen }: NavbarPropsType) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? 'h-screen opacity-100 pointer-events-auto'
          : 'h-0 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a
        onClick={() => {
          setMenuOpen(false);
          scrollToSection('home', navigate);
        }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Home
      </a>

      <a
        onClick={() => {
          setMenuOpen(false);
          scrollToSection('about', navigate);
        }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        About
      </a>

      <a
        onClick={() => {
          setMenuOpen(false);
          scrollToSection('projects', navigate);
        }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Projects
      </a>

      <a
        onClick={() => {
          setMenuOpen(false);
          scrollToSection('contact', navigate);
        }}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Contact
      </a>

      {user && (
        <>
          <a
            href="#/dashboard"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Dashboard
          </a>
          <button
            onClick={() => {
              handleLogout(auth, navigate);
            }}
            className={`text-2xl font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded my-4 transform transition-transform duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
