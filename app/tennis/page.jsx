// app/tennis-betting/page.jsx (Next.js 13+ with App Router)
// or pages/tennis-betting.jsx (Next.js 12)

import { Trophy, Coins, Activity, ShieldCheck, Smartphone, LineChart } from "lucide-react";

export default function TennisBetting() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-16 md:px-6 px-1 text-center">
        <h1 className="text-2xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Tennis Betting: A Complete Guide for Online Punters
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100">
          Tennis is one of the most exciting sports to watch, and betting on it makes it even more
          thrilling. With year-round tournaments and fast-paced matches, tennis betting offers punters
          countless opportunities worldwide.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6" /> What is Tennis Betting?
          </h2>
          <p className="leading-relaxed text-gray-300">
            Tennis betting is the act of placing wagers on the outcome of tennis matches or specific events
            within a match. With tournaments like the Grand Slams (Wimbledon, US Open, French Open, Australian
            Open), ATP Tour, and WTA Tour running almost year-round, punters have endless betting
            opportunities. Since tennis rarely ends in a draw, predictions can often be more straightforward
            than in team sports.
          </p>
        </article>

        {/* Popular Bets */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6" /> Popular Types of Tennis Bets
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Match Winner:</span> Predict which player will win
              the match.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Set Winner:</span> Bet on which player will win a
              particular set.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Over/Under Games:</span> Predict if the total number
              of games will be over or under a set figure.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Correct Score:</span> Predict the exact final score
              (e.g., 2–1).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Handicap Betting:</span> Give one player a virtual
              advantage/disadvantage (e.g., Player A -1.5 sets).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Live Betting (In-Play):</span> Bet while the match is
              ongoing (e.g., next point/game winner).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Outright Winner:</span> Predict who will win the
              entire tournament.
            </li>
          </ul>
        </article>

        {/* Why Popular */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6" /> Why Tennis Betting is Popular
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Year-round action with tournaments nearly every week.</li>
            <li>Individual performance decides outcomes, making it predictable.</li>
            <li>Variety of betting markets from match winners to specific points.</li>
            <li>Fast-paced rallies make live betting highly engaging.</li>
          </ul>
        </article>

        {/* Tips Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Tips for Smart Tennis Betting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Study player form, head-to-head stats, and injuries.",
              "Consider playing surfaces (clay, grass, hard courts).",
              "Account for weather in outdoor matches.",
              "Focus on smaller tournaments for better value odds.",
              "Manage your bankroll and never chase losses.",
              "Avoid emotional betting on your favorite player.",
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
            <Smartphone className="w-6 h-6" /> Role of Technology in Tennis Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Online platforms have transformed tennis betting with instant mobile apps, live streaming, and
            real-time match updates. Advanced stats like serve percentages, break points, and unforced errors
            give punters better insights. Many betting platforms now use AI and predictive analytics to offer
            smarter odds and a more engaging experience.
          </p>
        </article>

        {/* Future Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <LineChart className="w-6 h-6" /> The Future of Tennis Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Tennis betting is expanding as online betting grows globally. With stars like Novak Djokovic, Iga
            Świątek, and rising talents keeping fans hooked, demand for tennis markets will only increase.
            Features like live in-play betting and cash-out options are becoming standard, while regulation is
            making the industry safer and more transparent.
          </p>
        </article>

        {/* Conclusion */}
        <article className="bg-green-800/20 p-6 rounded-2xl border border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-400">Conclusion</h2>
          <p className="mt-4 text-gray-300">
            Tennis betting combines excitement, speed, and strategy. With year-round tournaments and diverse
            betting markets, it attracts millions of punters worldwide. Success depends on research, discipline,
            and smart betting strategies. Bet responsibly with{" "}
            <span className="text-green-400 font-semibold">Adanibook</span> and enhance your betting experience
            while keeping it safe and rewarding.
          </p>
        </article>
      </section>
    </main>
  );
}
