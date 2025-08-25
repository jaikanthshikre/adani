'use client'

import React, { useState } from 'react';
import { Menu, X, User, Wallet, Bell, Search } from 'lucide-react';
import Link from 'next/link';

export default function BettingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle closing the mobile menu on link click
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="w-full">
      {/* Topbar */}
      <div className="bg-gradient-to-r from-gray-900 to-green-500  text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-6 text-white">
              <span className="font-medium">🎰 Welcome Bonus: upto 10%</span>
              <span className="hidden md:inline">📞 24/7 Support</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline">⚡ Live Events: 1,247</span>
             <Link href="http://wa.link/iwantadaniid" passHref>
  <button className="hover:underline font-medium">
    Join Now
  </button>
</Link>

            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-900 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
           {/* Logo */}
<div className="flex-shrink-0 flex items-center space-x-2">
  <Link href="/" className="flex items-center space-x-2"> {/* Wrapping both image and name in the same link */}
    <img src="/images/logo.png" alt="Logo" className="h-10" />
    <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
      ADANI BOOK
    </span>
  </Link>
</div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/cricket" className="text-white hover:text-yellow-400 transition-colors font-medium">
                Cricket
              </Link>
              <Link href="/football" className="text-white hover:text-yellow-400 transition-colors font-medium">
                FootBall
              </Link>
              <Link href="/tennis" className="text-white hover:text-yellow-400 transition-colors font-medium">
                Tennis
              </Link>
              <Link href="/casino" className="text-white hover:text-yellow-400 transition-colors font-medium">
                Casino Betting
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search games, teams..."
                  className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none w-64"
                />
              </div>
            </div>

            {/* User Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Balance */}
              <div className="bg-green-600 text-white px-3 py-1 rounded-lg flex items-center space-x-2">
                <Wallet className="w-4 h-4" />
                <span className="font-medium">₹500.00</span>
              </div>

              {/* Notifications */}
              <button className="relative text-gray-300 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* User Menu */}
              {/* Deposit Button */}
             <Link href="http://wa.link/iwantadaniid" passHref>
  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
    Deposit
  </button>
</Link>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {/* User Info Mobile */}
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white font-medium">User</p>
                  <p className="text-green-400 text-sm font-medium">Balance:₹500.00</p>
                </div>
              </div>

              {/* Navigation Links Mobile */}
              <div className="space-y-2">
                <Link href="/cricket" className="block text-white hover:text-yellow-400 py-2 font-medium" onClick={handleMobileLinkClick}>
                  Cricket
                </Link>
                <Link href="/football" className="block text-white hover:text-yellow-400 py-2 font-medium" onClick={handleMobileLinkClick}>
                  FootBall
                </Link>
                <Link href="/tennis" className="block text-white hover:text-yellow-400 py-2 font-medium" onClick={handleMobileLinkClick}>
                  Tennis
                </Link>
                <Link href="/casino" className="block text-white hover:text-yellow-400 py-2 font-medium" onClick={handleMobileLinkClick}>
                  Casino Betting
                </Link>
              </div>

              {/* Action Buttons Mobile */}
              <div className="pt-4 space-y-3">
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 rounded-lg">
                  Deposit
                </button>
                <button className="w-full bg-gray-700 text-white font-medium py-2 rounded-lg border border-gray-600">
                  My Account
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
