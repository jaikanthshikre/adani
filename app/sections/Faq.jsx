'use client'

import { useState } from 'react';
import { ChevronDown, Star, Trophy, Shield, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function GamingSiteSections() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyBestFeatures = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Industry Leading",
      description: "Over 10 years of excellence in gaming and betting with award-winning platform"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Secure",
      description: "Bank-grade encryption and licensed operations ensure your funds are always safe"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Payouts",
      description: "Lightning-fast withdrawals processed within minutes, not days"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service from gaming experts who understand your needs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "5M+ Players",
      description: "Join millions of satisfied players who trust us with their gaming experience"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Fair Play",
      description: "Provably fair algorithms and transparent odds on every game and bet"
    }
  ];

  const faqs = [
  {
    question: "How quickly can I withdraw my winnings?",
    answer:
      "At Adanibook, most withdrawals are processed instantly within 5–15 minutes for UPI, Paytm, PhonePe, and cryptocurrency. Bank transfers may take 1–3 working days depending on your bank."
  },
  {
    question: "Is my personal and financial information secure?",
    answer:
      "Yes, your data is 100% safe. Adanibook uses 256-bit SSL encryption along with advanced fraud protection systems. All transactions are processed through trusted Indian payment gateways and we operate under strict international betting regulations."
  },
  {
    question: "What games and betting options are available on Adanibook?",
    answer:
      "We offer a wide range of options including cricket betting, football, tennis, kabaddi, esports, live casino games, slots, and virtual sports. Adanibook is especially popular for IPL betting and Indian casino favorites like Teen Patti and Andar Bahar."
  },
  {
    question: "Are there any deposit or withdrawal limits?",
    answer:
      "The minimum deposit at Adanibook starts at just ₹100. Withdrawal limits depend on your payment method and VIP level. High-value players can request higher limits through our 24/7 VIP support team."
  },
  {
    question: "How do I know the games are fair?",
    answer:
      "All casino games on Adanibook use certified Random Number Generators (RNGs) and are regularly tested by independent agencies. For sports betting, odds are set transparently and we also offer provably fair games where you can verify results."
  },
  {
    question: "What bonuses and promotions does Adanibook offer?",
    answer:
      "New players at Adanibook get a 100% welcome bonus up to ₹10,000 plus free spins on popular slots. We also provide daily cashback, IPL special offers, free bets, and an exclusive VIP Club for loyal Indian players with personalized rewards."
  }
];


  const reviews = [
    {
      name: "Aman",
      rating: 5,
      review: "Best gaming platform I've used in years. Lightning fast payouts and incredible game selection. Customer support actually knows what they're talking about!",
      game: "Andar Bahar",
      date: "2 days ago"
    },
    {
      name: "Saransh",
      rating: 5,
      review: "Won ₹25,000 on slots last month and had my money in my account within 10 minutes. No questions asked, no delays. This is how all casinos should operate.",
      game: "Horse Racing",
      date: "1 week ago"
    },
    {
      name: "Nikhil",
      rating: 5,
      review: "The live dealers are amazing and the streaming quality is perfect. Feels like being in a real casino from my living room. Highly recommend!",
      game: "Rummy",
      date: "3 days ago"
    },
    {
      name: "Suraj",
      rating: 4,
      review: "Great variety of games and fair odds. The mobile app works flawlessly. Only complaint is I wish there were more cryptocurrency options.",
      game: "Dragon Tiger",
      date: "5 days ago"
    },
    {
      name: "Karan",
      rating: 5,
      review: "VIP treatment is incredible. Personal account manager, exclusive bonuses, and priority support. Worth every penny of the higher stakes.",
      game: "Poker",
      date: "1 week ago"
    },
    {
      name: "Rohit",
      rating: 5,
      review: "Started with ₹100 and turned it into ₹8,000 playing their exclusive tournaments. Fair play guaranteed and transparent odds on everything.",
      game: "Tennis",
      date: "4 days ago"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Why We Are Best Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Why We're the Best Choice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the ultimate gaming platform trusted by millions of players worldwide. 
              Here's what sets us apart from the competition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBestFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-yellow-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Got questions? We've got answers. Find everything you need to know about gaming with us.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-purple-400 transition-transform duration-200 ₹{
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              What Our Players Say
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it. See what thousands of satisfied players have to say.
            </p>
          </div>
          
          {/* Google-style Reviews */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800/60 backdrop-blur border border-gray-700 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  {/* User Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Review Content */}
                  <div className="flex-1">
                    {/* Header with name and date */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-white">{review.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {review.review}
                    </p>
                    
                    {/* Game/Category Tag */}
                    <div className="inline-block">
                      <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                        {review.game}
                      </span>
                    </div>
                    
                    {/* Like/Helpful buttons */}
                    <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-700">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>Helpful</span>
                      </button>
                      <span className="text-gray-600">•</span>
                      <button className="text-gray-400 hover:text-white text-sm transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overall Rating Summary */}
          <div className="mt-16 bg-gray-800/60 backdrop-blur border border-gray-700 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <span className="text-4xl font-bold text-white">4.9</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400">Based on 50,000+ reviews</p>
              </div>
              
              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-2">{rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ 
                          width: rating === 5 ? '75%' : 
                                 rating === 4 ? '20%' : 
                                 rating === 3 ? '3%' : 
                                 rating === 2 ? '1%' : '1%' 
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-8">
                      {rating === 5 ? '75%' : 
                       rating === 4 ? '20%' : 
                       rating === 3 ? '3%' : 
                       rating === 2 ? '1%' : '1%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}