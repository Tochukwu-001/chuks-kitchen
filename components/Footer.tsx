"use client"
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { Styles } from './Styles';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'My Orders', href: '/my-orders' },
    { name: 'Account', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const contactInfo = [
    '+234 81 234 5678',
    'hello@chukakitchen.com',
    '123 Taste Blvd, Lagos, Nigeria!'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown-800 text-white" style={{ backgroundColor: Styles.primaryBrown }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 
              className="text-3xl italic mb-4" 
              style={{ fontFamily: 'Brush Script MT, cursive', color: '#F5A623' }}
            >
              Chuks Kitchen
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index} className="text-gray-300">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <li key={index}>
                    <a 
                      href={social.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex justify-between items-center">
          <p className="text-gray-400 text-xs">
            &copy; 2020 LR Media. All rights reserved.
          </p>
          
            <button
            onClick={scrollToTop}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg fixed bottom-10 right-10"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}