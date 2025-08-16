'use client'
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-950 to-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Adanibetbook</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              The ultimate destination for online gaming and sports betting. 
              Play responsibly, win big, and enjoy seamless entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Top Games</a></li>
              <li><a href="#" className="hover:text-white transition">Live Casino</a></li>
              <li><a href="#" className="hover:text-white transition">Sports</a></li>
              <li><a href="#" className="hover:text-white transition">Promotions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <FaTelegram />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BetZone. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-gray-400">
            18+ | Play Responsibly | Gambling can be addictive
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
