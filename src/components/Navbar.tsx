import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Languages, Search, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithGoogle } from '../lib/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Signed in user:', user);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  // Add search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Languages className="h-8 w-8 text-indigo-600" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                LangLearn
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <Search className="h-5 w-5" />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4"
                  >
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search resources..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        autoFocus
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="absolute right-2 top-2 p-1 rounded-md hover:bg-gray-100"
                      >
                        <Search className="h-5 w-5 text-gray-500" />
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/resources"
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform"
            >
              Resources
            </Link>
            <Link
              to="/ebooks"
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform"
            >
              E-Books
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform"
            >
              Dashboard
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignIn}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2 shadow-md"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/resources"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md"
              >
                Resources
              </Link>
              <Link
                to="/ebooks"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md"
              >
                E-Books
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 rounded-md"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignIn}
                className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}