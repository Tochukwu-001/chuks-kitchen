"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo */}
          <div className="shrink-0">
            <h1 className="text-orange-500 font-serif text-xl sm:text-2xl lg:text-3xl italic">
              Chuks Kitchen
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              My Orders
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              Account
            </a>
          </div>

          {/* Login Button */}
          <div className="hidden lg:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 p-2"
            >
              {mobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-orange-500 font-medium py-2">
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 font-medium py-2 hover:text-orange-500"
            >
              Explore
            </a>
            <a
              href="#"
              className="block text-gray-700 font-medium py-2 hover:text-orange-500"
            >
              My Orders
            </a>
            <a
              href="#"
              className="block text-gray-700 font-medium py-2 hover:text-orange-500"
            >
              Account
            </a>
            <Link href={"/signin"} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors mt-2">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
