
import { Trophy, Coins, Activity, ShieldCheck, Smartphone, LineChart } from "lucide-react";

export default function CricketBetting() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-16 md:px-6 px-1 text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Cricket Betting: A Complete Guide for Beginners & Experts
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100">
          Learn strategies, tips, and safe practices for betting on cricket. Make smarter decisions with our guide.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6" /> What is Cricket Betting?
          </h2>
          <p className="leading-relaxed text-gray-300">
            Cricket betting refers to predicting the outcome of a cricket match or specific events within the match and placing money on those predictions. With Test matches, ODIs, and T20 leagues like the IPL, each format offers unique betting opportunities.
          </p>
        </article>

        {/* Popular Bets */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6" /> Popular Types of Cricket Bets
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Match Winner:</span> Predict which team will win.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Toss Winner:</span> Bet on the coin toss outcome.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Top Batsman / Bowler:</span> Predict best run-scorer or wicket-taker.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Over/Under Runs:</span> Bet on total runs over/under a number.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Live Betting:</span> Place bets as the game happens.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Outright Bets:</span> Predict tournament or league winners.
            </li>
          </ul>
        </article>

        {/* Why Betting is Popular */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6" /> Why Cricket Betting is Popular
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Passion for cricket adds excitement.</li>
            <li>Wide variety of tournaments and formats.</li>
            <li>Potential profits with strategy and knowledge.</li>
            <li>Real-time live betting experience.</li>
          </ul>
        </article>

        {/* Tips Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Tips for Safe & Smart Betting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Do Your Research – Study teams, players, and pitch conditions.",
              "Understand the Format – Adjust strategies for Tests, ODIs, and T20s.",
              "Start Small – Begin with smaller bets to gain experience.",
              "Manage Your Bankroll – Set a budget & stick to it.",
              "Use Trusted Platforms – Always choose licensed betting sites.",
              "Avoid Emotional Betting – Don’t bet blindly on your favorite team.",
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition"
              >
                ✅ {tip}
              </div>
            ))}
          </div>
        </article>

        {/* Technology Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Smartphone className="w-6 h-6" /> The Role of Technology in Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Online platforms, mobile apps, live streaming, and instant cash-out have made cricket betting more accessible. Real-time stats, expert predictions, and AI-driven analytics further improve accuracy and enhance user experience.
          </p>
        </article>

        {/* Future Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <LineChart className="w-6 h-6" /> The Future of Cricket Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            With IPL and global tournaments, betting opportunities will only grow. Legalization, advanced technology, and responsible gaming will make the future more secure, profitable, and entertaining.
          </p>
        </article>

        {/* Conclusion */}
        <article className="bg-green-800/20 p-6 rounded-2xl border border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-400">Conclusion</h2>
          <p className="mt-4 text-gray-300">
            Cricket betting isn’t just about predicting results—it’s about strategy, research, and responsible play. Whether you’re a beginner or an expert, it adds an unmatched thrill to the game. Play safe and bet smart with{" "}
            <span className="text-green-400 font-semibold">Adanibook</span>.
          </p>
        </article>
      </section>
    </main>
  );
}
