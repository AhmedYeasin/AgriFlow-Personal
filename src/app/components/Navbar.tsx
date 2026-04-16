"use client";

import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px scroll korle trigger hobe
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg py-3" 
          : "bg-white/90 dark:bg-black/90 backdrop-blur-md py-5 border-b border-gray-100 dark:border-zinc-800"
      }`}
    >
      {/* --- Green Line Animation Section --- */}
      {/* Eti sudhu scrolled state true hole ekbar animate hobe */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={scrolled ? { scaleX: 1, opacity: [0, 1, 1, 0] } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-[2px] w-full bg-green-500 origin-center"
      />

      <div className="max-w-full mx-auto px-6 md:px-15 flex items-center justify-between relative z-10"> 
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
        </div>
  
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button className={`text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-green-600" : "text-black dark:text-white"
          } hover:text-green-500`}>
            Log In
          </button>
          <button className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            scrolled 
              ? "bg-green-600 text-white hover:bg-green-700" 
              : "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/20"
          }`}>
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl focus:outline-none transition-colors ${
              scrolled ? "text-green-600" : "text-black dark:text-white"
            }`}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-green-500/30 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <button className="w-full py-3 text-center font-medium border border-zinc-200 dark:border-zinc-800 rounded-xl">
              Log In
            </button>
            <button className="w-full py-3 text-center font-medium bg-green-600 text-white rounded-xl">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;