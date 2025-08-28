
import { Trophy, Coins, Activity, ShieldCheck, Smartphone, LineChart } from "lucide-react";

export default function FootballBetting() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-16 md:px-6 px-1 text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Football Betting: A Complete Guide for Beginners & Experienced Punters
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100">
          Football is the most popular sport in the world, and betting on it has become one of the biggest
          online markets. From the EPL and UEFA Champions League to the FIFA World Cup, football betting
          offers endless excitement and opportunities.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6" /> What is Football Betting?
          </h2>
          <p className="leading-relaxed text-gray-300">
            Football betting is the process of predicting the outcome of matches or specific in-game events
            and placing wagers on them. Since football matches can end in a win, loss, or draw, the betting
            markets are extensive. Online platforms now make it easy to bet on local, regional, and
            international tournaments with just a few clicks.
          </p>
        </article>

        {/* Popular Bets */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6" /> Popular Types of Football Bets
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Match Result (1X2):</span> Predict home win (1),
              away win (2), or draw (X).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Over/Under Goals:</span> Bet on the total number of
              goals (e.g., Over 2.5 goals).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Both Teams to Score (BTTS):</span> Predict if both
              teams will score in the match.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Correct Score:</span> Predict the exact final score
              (e.g., 2–1).
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">First/Anytime Goal Scorer:</span> Bet on which player
              will score first or anytime.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Handicap Betting:</span> Balance odds by giving one
              team a virtual advantage/disadvantage.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Live (In-Play) Betting:</span> Place bets while the
              match is ongoing.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              <span className="font-semibold text-white">Outright Winner:</span> Predict the winner of a league
              or tournament.
            </li>
          </ul>
        </article>

        {/* Why Popular */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6" /> Why Football Betting is So Popular
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Global coverage with daily matches worldwide.</li>
            <li>Exciting variety of betting options on teams and players.</li>
            <li>Big tournaments like FIFA World Cup & Champions League.</li>
            <li>In-play betting thrill with live action.</li>
            <li>Potential for profits with smart strategies.</li>
          </ul>
        </article>

        {/* Tips Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Tips for Successful Football Betting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Research team form, injuries, and head-to-head stats.",
              "Understand league differences (EPL, La Liga, Serie A, etc.).",
              "Focus on value bets, not just favorites.",
              "Manage your bankroll and avoid chasing losses.",
              "Avoid emotional betting on favorite teams.",
              "Specialize in specific markets like BTTS or Over/Under.",
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
            <Smartphone className="w-6 h-6" /> Role of Technology in Football Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Modern betting platforms have made football betting easier, safer, and more enjoyable. Mobile
            apps, real-time updates, and live streaming allow punters to engage anywhere. Bookmakers now use
            advanced analytics and AI to set accurate odds, while real-time stats help bettors make smarter
            choices.
          </p>
        </article>

        {/* Future Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <LineChart className="w-6 h-6" /> The Future of Football Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            With increasing legalization worldwide, football betting is set to grow further. AI, blockchain,
            and instant cash-out features will make betting more exciting and transparent. E-sports football
            tournaments are also expanding the betting space, ensuring football betting stays the most popular
            option globally.
          </p>
        </article>

        {/* Conclusion */}
        <article className="bg-green-800/20 p-6 rounded-2xl border border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-400">Conclusion</h2>
          <p className="mt-4 text-gray-300">
            Football betting isn’t just about predicting match results—it’s about strategy, timing, and smart
            decision-making. With global tournaments, diverse betting markets, and live options, football
            remains the top choice for punters. Bet responsibly with{" "}
            <span className="text-green-400 font-semibold">Adanibook</span> and enjoy safe, rewarding
            experiences.
          </p>
        </article>
      </section>
    </main>
  );
}
