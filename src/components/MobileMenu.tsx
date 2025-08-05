import type { NavbarPropsType } from '../types/NavBar.types';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export const MobileMenu = ({ menuOpen, setMenuOpen }: NavbarPropsType) => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/juna-portfolio/';
    } catch {
      alert('Sign out failed. Please try again.');
    }
  };

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
        href="/juna-portfolio/#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Home
      </a>

      <a
        href="/juna-portfolio/#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        About
      </a>

      <a
        href="/juna-portfolio/#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Projects
      </a>

      <a
        href="/juna-portfolio/#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Contact
      </a>

      {user && (
        <>
          <a
            href="/juna-portfolio/dashboard"
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Dashboard
          </a>
          <button
            onClick={handleLogout}
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
