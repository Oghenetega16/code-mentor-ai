import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Code, Menu, X, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-gray-900">CodeMentor AI</span>
          </Link>

          {/* Desktop Nav + Auth */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <nav className="flex space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/features" className="nav-link">Features</Link>
              <Link to="/community" className="nav-link">Community</Link>
              <Link to="/learning" className="nav-link">Learning</Link>
            </nav>

            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{user?.username}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}>
                      <Settings className="w-4 h-4 mr-2" /> Profile Settings
                    </Link>
                    <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="w-4 h-4 mr-2" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Sign In</Link>
                <Link to="/signup" className="btn-primary">Get Started</Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link to="/community" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Community</Link>
              <Link to="/learning" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Learning</Link>
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              <Link to="/signup" className="block px-3 py-2 text-base font-medium bg-primary-500 text-white hover:bg-primary-600 rounded-md" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
