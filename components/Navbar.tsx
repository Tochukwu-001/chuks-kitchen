"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", url: "/" },
    { label: "Explore", url: "/explore" },
    { label: "My Orders", url: "/my-orders" },
    { label: "Account", url: "#" },
  ];

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand Logo */}
          <div className="shrink-0 z-50">
            <Link
              href={"/"}
              className="text-orange-500 font-serif text-xl sm:text-2xl lg:text-3xl italic"
            >
              Chuks Kitchen
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`text-lg transition-colors hover:text-orange-500 ${
                  isActive(item.url) ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden lg:block">
            <Link
              href={"/signup"}
              className="bg-orange-500 text-white font-semibold px-8 py-2.5 rounded-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
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
        <div className="lg:hidden">
          <div className="fixed top-0 right-0 h-dvh w-full flex flex-col bg-white items-center pt-20 gap-15">
            {navItems.map((item, i) => (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                key={i}
                href={item.url}
                className={`text-lg transition-colors hover:text-orange-500 ${
                  isActive(item.url) ? "text-orange-500 font-semibold" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={"/signup"}
              className="bg-orange-500 text-white font-semibold px-8 py-2.5 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;