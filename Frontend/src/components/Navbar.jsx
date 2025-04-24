import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiHome, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/shop', icon: FiShoppingBag, label: 'Shop' },
    { path: '/wishlist', icon: FiHeart, label: 'Wishlist' },
    { path: '/cart', icon: FiShoppingCart, label: 'Cart' },
    { path: '/profile', icon: FiUser, label: 'Profile' }
  ];


  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
         
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://res.cloudinary.com/dpwqggym0/image/upload/c_thumb,w_200,g_face/v1745220359/logo_kkulrl.png" alt="Logo" className="h-10 w-10 rounded-xl" />
            <span className="font-bold text-xl mr-4">laro</span>
          </Link>

      
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 ${
                    isActive(item.path)
                      ? 'text-blue-500'
                      : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={` px-3 py-2 rounded-md flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-500'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
