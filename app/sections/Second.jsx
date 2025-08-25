'use client'
import React, { useState } from 'react';
import { 
  Star, 
  Trophy, 
  Zap, 
  Play, 
  Clock, 
  TrendingUp, 
  Users, 
  Gift,
  ArrowRight,

  Phone
} from 'lucide-react';

export default function BelowHeroSection() {
  const [activeTab, setActiveTab] = useState('popular');

  const liveEvents = [
    {
      id: 1,
      team1: "Manchester United",
      team2: "Arsenal",
      time: "Live",
      odds: { home: 2.1, draw: 3.4, away: 2.8 },
      viewers: "15.2k"
    },
    {
      id: 2,
      team1: "Lakers",
      team2: "Warriors",
      time: "22:30",
      odds: { home: 1.9, draw: null, away: 2.2 },
      viewers: "8.7k"
    },
    {
      id: 3,
      team1: "Real Madrid",
      team2: "Barcelona",
      time: "15 min",
      odds: { home: 2.5, draw: 3.1, away: 2.3 },
      viewers: "23.1k"
    }
  ];

  const popularGames = [
    {
      id: 1,
      name: "Blackjack Pro",
      image: "🃏",
      players: "2.1k",
      rating: 4.8,
      category: "Table Games"
    },
    {
      id: 2,
      name: "Mega Fortune",
      image: "🎰",
      players: "5.3k",
      rating: 4.9,
      category: "Slots"
    },
    {
      id: 3,
      name: "Poker Tournament",
      image: "♠️",
      players: "1.8k",
      rating: 4.7,
      category: "Poker"
    },
    {
      id: 4,
      name: "Lightning Roulette",
      image: "🎲",
      players: "3.2k",
      rating: 4.6,
      category: "Live Casino"
    }
  ];

  const promotions = [
    {
      id: 1,
      title: "Weekend Bonus",
      description: "Get 50% bonus on deposits",
      code: "WEEKEND50",
      validUntil: "2 days left",
      bgColor: "from-purple-600 to-purple-800"
    },
    {
      id: 2,
      title: "Free Spins Friday",
      description: "100 free spins on selected slots",
      code: "FREESPIN100",
      validUntil: "5 days left",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "Cashback Monday",
      description: "Up to 20% cashback on losses",
      code: "CASHBACK20",
      validUntil: "1 day left",
      bgColor: "from-green-600 to-green-800"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Live Events Section */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-red-500" />
                  <span>Live Sports Betting</span>
                </h2>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {liveEvents.map((event) => (
                  <div key={event.id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {event.time === 'Live' ? (
                              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                                LIVE
                              </span>
                            ) : (
                              <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                                {event.time}
                              </span>
                            )}
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Users className="w-3 h-3" />
                              <span className="text-xs">{event.viewers}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-white font-medium">
                            {event.team1} vs {event.team2}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                          {event.odds.home}
                        </button>
                        {event.odds.draw && (
                          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                            {event.odds.draw}
                          </button>
                        )}
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                          {event.odds.away}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Games Section */}
            <div className="bg-gray-800 rounded-xl p-6 ">

          <video 
  src="/images/videoone.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-full h-auto rounded-xl shadow-lg"
/>


             
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Promotions */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Gift className="w-5 h-5 text-purple-400" />
                <span>Active Promotions</span>
              </h3>
              
              <div className="space-y-4">
                {promotions.map((promo) => (
                  <div key={promo.id} className={`bg-gradient-to-r ₹{promo.bgColor} rounded-lg p-4 text-white`}>
                    <h4 className="font-semibold mb-1">{promo.title}</h4>
                    <p className="text-sm opacity-90 mb-3">{promo.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="bg-black bg-opacity-20 px-2 py-1 rounded text-xs font-mono">
                        {promo.code}
                      </div>
                      <span className="text-xs opacity-75">{promo.validUntil}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Winners Feed */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Recent Winners</span>
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: "Rohit.", game: "Dragon Tiger", amount: "₹12,450" },
                  { name: "Avinash.", game: "Lucky7", amount: "₹8,200" },
                  { name: "Nikhil.", game: "Horse Racing", amount: "₹5,670" },
                  { name: "Aftab.", game: "Aviator", amount: "₹3,890" }
                ].map((winner, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium text-sm">{winner.name}</p>
                      <p className="text-gray-400 text-xs">{winner.game}</p>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">
                      {winner.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
           {/*  <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all">
                  Deposit Funds
                </button>
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors">
                  View Bonuses
                </button>
                <button className="w-full bg-gray-700 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors">
                  Support Center
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}