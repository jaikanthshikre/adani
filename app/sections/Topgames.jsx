'use client'
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
    <div className="bg-gradient-to-br from-black via-gray-950 to-black py-12 px-4 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">🔥</span>
            TRENDING NOW
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Top Gaming Collection
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the most popular games with millions of players worldwide.
            Join the excitement and start winning today!
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
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
                  className="w-full h-33 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
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
  );
};

export default TopGames;
