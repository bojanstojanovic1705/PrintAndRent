import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? '' : 'bg-white/80 backdrop-blur-lg shadow-lg'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              PrintAndRent
            </span>
          </Link>

          {!isHomePage && (
            <Link
              to="/"
              className="group relative inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-lg 
                rounded-full text-sm font-medium text-primary hover:text-white transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <svg 
                className="w-4 h-4 relative transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="relative">Nazad na početnu</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
