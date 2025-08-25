'use client'
import { ArrowDownCircle, Clock, Gift, Phone, Shield, Trophy, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';

const TopGames = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  const games = [
    { id: 1, name: "Aviator", image: "/images/aviator.png", category: "Crash Game", players: "2.4k", hot: true, multiplier: "x1.5" },
    { id: 2, name: "Casino Royale", image: "/images/casino.png", category: "Live Casino", players: "1.8k", hot: false, multiplier: "x2.1" },
    { id: 3, name: "Mega Lottery", image: "/images/lottery.png", category: "Lottery", players: "956", hot: true, multiplier: "x10.5" },
    { id: 4, name: "Lucky 7", image: "/images/lucky7.png", category: "Slots", players: "3.2k", hot: true, multiplier: "x3.7" },
    { id: 5, name: "Cricket Betting", image: "/images/cricket.png", category: "Sports", players: "1.2k", hot: false, multiplier: "x1.9" },
    { id: 6, name: "Royal Roulette", image: "/images/roulete.png", category: "Table Game", players: "867", hot: false, multiplier: "x2.8" },
    { id: 7, name: "Teen Patti Gold", image: "/images/teenpatti.png", category: "Card Game", players: "2.1k", hot: true, multiplier: "x4.2" },
    { id: 8, name: "Rummy Master", image: "/images/rummy.png", category: "Card Game", players: "1.5k", hot: false, multiplier: "x2.3" }
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 px-4 border-t border-gray-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left side - Brand info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="text-left">
                  <div className="text-white text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                    adani999.com
                  </div>
                  <div className="text-gray-400 text-sm flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Instant Transactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - badges + actions */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span className="text-gray-300">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-gray-300">Instant Processing</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs md:text-sm">
                <button
                  onClick={() => window.open("https://www.adani999.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Deposit</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open("https://www.adani999.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Withdraw</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom notification bar */}
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="hidden lg:flex items-center space-x-6 text-xs text-gray-400">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </span>
                <span>Last processed: 27 seconds ago</span>
                <span>Next maintenance: 00:09 UTC</span>
              </div>

              <div className="text-center lg:text-right">
                <div className="text-xs text-gray-400 mb-1">Processing Speed</div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-semibold text-white">Ultra Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-gray-800 border-y border-gray-700">
        <div className="w-full md:max-w-7xl mx-auto lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">1,247</span>
              </div>
              <p className="text-gray-400 text-sm">Live Events</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">89.2k</span>
              </div>
              <p className="text-gray-400 text-sm">Active Players</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Gift className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">₹2.1M</span>
              </div>
              <p className="text-gray-400 text-sm">Jackpot Prize</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-red-400" />
                <span className="text-white font-semibold">24/7</span>
              </div>
              <p className="text-gray-400 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black via-gray-950 to-black py-12 px-4 text-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="mr-2">🔥</span>
              TRENDING GAMES
            </div>
            <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-4">
              Top Gaming Collection
            </h1>
            <p className="text-gray-300 text-md md:text-lg max-w-3xl mx-auto">
              Discover the most popular games with millions of players worldwide.
              Join the excitement and start winning today!
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game) => (
              <a key={game.id} href="http://wa.link/iwantadaniid" target="_blank" rel="noopener noreferrer">
                <div
                  className="group relative bg-white/[0.04] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-700"
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  {/* Hot Badge */}
                  {game.hot && (
                    <div className="absolute top-3 left-3 z-10 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
                      <span className="mr-1">🔥</span>
                      HOT
                    </div>
                  )}

                  {/* Multiplier Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-gray-200 text-black px-2 py-1 rounded-full text-xs font-extrabold">
                    {game.multiplier}
                  </div>

                  {/* Game Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-29 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Game Info */}
                  <div className="p-4">
                    <h3 className="font-extrabold text-white text-lg mb-1 truncate">
                      {game.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {game.category}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="font-medium">{game.players} playing</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <span className="mr-1">⭐</span>
                        <span className="font-semibold">4.8</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"></div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-gray-200 to-gray-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all duration-200 shadow-lg transform hover:scale-105">
              View All Games
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopGames;
