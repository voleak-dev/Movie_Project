import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // បង្កើត Array សម្រាប់ Link ដើម្បីងាយស្រួលគ្រប់គ្រង
  const navLinks = [
    { name: 'ទំព័រដើម', path: '/' },
    { name: 'ភាពយន្ត', path: '/movies' },
    { name: 'កម្មវិធី TV', path: '/tvshows' },
    { name: 'ពេញនិយម', path: '/popular' },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@100..700&display=swap');
          .font-khmer { font-family: 'Kantumruy Pro', sans-serif; }
        `}
      </style>

      <nav className="bg-[#0a0c10]/95 backdrop-blur-md text-white sticky top-0 z-[100] font-khmer border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center group">
              <Link to="/" className="flex items-center">
                <span className="text-red-600 text-3xl font-black tracking-tighter uppercase italic group-hover:scale-105 transition-transform">
                  Movie<span className="text-white">Kh</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Search & Profile */}
            <div className="hidden md:flex items-center space-x-5">
              <div className="relative group">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors" size={14} />
                <input 
                  type="text" 
                  placeholder="ស្វែងរកចំណងជើងរឿង..." 
                  className="bg-[#161b22] border border-gray-700 text-gray-200 text-xs rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 w-48 lg:w-64 transition-all duration-300"
                />
              </div>

              <Link to="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-xl shadow-lg border border-gray-700">
                    ☺
                </div>
              </Link>

              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-red-600/20">
                ចូលប្រើ
              </button>
            </div>

            {/* Mobile menu button - កែសម្រួលឱ្យស្រួលចុច */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white transition-colors z-[110]"
              >
                {isOpen ? <FaTimes size={28} className="text-white" /> : <FaBars size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className={`fixed inset-0 z-[105] md:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
          {/* Overlay - ផ្ទៃខាងក្រោយងងឹត */}
          <div 
            className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Sidebar Content */}
          <div className={`absolute top-0 left-0 bg-[#0d1117] w-[280px] h-full p-6 shadow-2xl border-r border-gray-800 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="mb-10 flex items-center justify-between">
               <span className="text-red-600 text-2xl font-bold italic">MovieKh</span>
            </div>
            
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-red-500 text-xl font-medium border-b border-gray-800/50 pb-4 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4">
                <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-600/20 active:scale-95 transition-transform">
                  ចូលប្រើប្រាស់
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;