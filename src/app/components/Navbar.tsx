"use client";

import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import Dropdown from "@/app/components/Dropdown";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-white/70 dark:bg-black/60"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="max-w-full mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/marketplace" className="hover:text-green-500">Marketplace</Link>

          <Dropdown
            title="Solutions"
            items={[
              { name: "Fertilizer", link: "/fertilizer" },
              { name: "Crops & Diseases", link: "/crop-dieseases" },
              { name: "Live Crops", link: "/live" },
              { name: "Services", link: "/services" },
            ]}
          />

          <Dropdown
            title="Resources"
            items={[
              { name: "How It Works", link: "/how-it-works" },
              { name: "Agriculturists", link: "/agriculturist" },
            ]}
          />

          <Link href="/about" className="hover:text-green-500">About</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Dark Mode */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xl p-2"
            >
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          )}

          {/* AUTH */}
          {status === "loading" ? (
            <span>Loading...</span>
          ) : session?.user ? (
            <>
              <Link
                href="/Dashboard"
                className="px-4 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
              >
                Dashboard
              </Link>

              <div className="flex items-center gap-2">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="user"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="hidden lg:block">
                  {session.user.name || "User"}
                </span>
              </div>

              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <HiSun /> : <HiMoon />}
            </button>
          )}

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-6 bg-white dark:bg-black flex flex-col gap-4"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/marketplace" onClick={() => setIsOpen(false)}>Marketplace</Link>

            <Dropdown
              title="Solutions"
              items={[
                { name: "Fertilizer", link: "/fertilizer" },
                { name: "Crops & Diseases", link: "/crop-dieseases" },
                { name: "Live Crops", link: "/live" },
                { name: "Services", link: "/services" },
              ]}
            />

            <Dropdown
              title="Resources"
              items={[
                { name: "How It Works", link: "/how-it-works" },
                { name: "Agriculturists", link: "/agriculturist" },
              ]}
            />

            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>

            {session?.user ? (
              <>
                <Link href="/Dashboard" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="bg-red-500 text-white py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="bg-green-600 text-white py-2 rounded text-center"
              >
                Log In
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;