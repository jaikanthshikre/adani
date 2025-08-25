// app/casino-betting/page.jsx (Next.js 13+ App Router)
// or pages/casino-betting.jsx (Next.js 12)

import { Dice5, Coins, Gamepad2, Users, ShieldCheck, Smartphone, LineChart } from "lucide-react";

export default function CasinoBetting() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Casino Betting: A Complete Guide to Online Casino Games
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-green-100">
          Casino betting has been popular for centuries, evolving from traditional land-based casinos
          to today’s online platforms. With just a smartphone or computer, you can enjoy roulette,
          blackjack, poker, and slots from the comfort of your home.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Dice5 className="w-6 h-6" /> What is Casino Betting?
          </h2>
          <p className="leading-relaxed text-gray-300">
            Casino betting refers to wagering real money on casino games, either in physical casinos
            or online. Online platforms now offer a wide variety of games including live dealer
            experiences that replicate the thrill of real casinos. Games like blackjack and poker
            require strategy, while roulette and slots rely more on chance—catering to all types of
            players.
          </p>
        </article>

        {/* Popular Games */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Gamepad2 className="w-6 h-6" /> Popular Casino Betting Games
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              🎡 <span className="font-semibold text-white">Roulette:</span> Bet on numbers, colors,
              or ranges as the wheel spins.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              🃏 <span className="font-semibold text-white">Blackjack:</span> Beat the dealer by
              getting as close to 21 as possible.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              ♠️ <span className="font-semibold text-white">Poker:</span> A skill-based game with
              versions like Texas Hold’em and Omaha.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              🎴 <span className="font-semibold text-white">Baccarat:</span> Bet on whether the
              player or banker has the higher hand.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              🎰 <span className="font-semibold text-white">Slot Machines:</span> Fun themes and big
              jackpot prizes make slots the most popular online casino game.
            </li>
            <li className="bg-gray-900 p-4 rounded-xl border border-green-600">
              🎥 <span className="font-semibold text-white">Live Casino Games:</span> Play with real
              dealers for an authentic experience.
            </li>
          </ul>
        </article>

        {/* Why Popular */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6" /> Why Casino Betting is Popular
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Wide game variety catering to all player types.</li>
            <li>Easy accessibility with online platforms anytime, anywhere.</li>
            <li>Exciting bonuses like free spins, welcome offers, and loyalty rewards.</li>
            <li>Live dealer games provide real-time social interaction.</li>
            <li>Potential profits with strategy and luck combined.</li>
          </ul>
        </article>

        {/* Tips Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> Tips for Successful Casino Betting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Learn the rules before betting real money.",
              "Start small to gain experience as a beginner.",
              "Choose trusted, licensed, and secure platforms.",
              "Use bonuses like free spins and cashback wisely.",
              "Practice strategy games such as blackjack and poker.",
              "Set a budget and never gamble more than you can afford.",
              "Know when to stop and avoid chasing losses.",
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
            <Smartphone className="w-6 h-6" /> The Role of Technology in Casino Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Technology has transformed casino betting with mobile-friendly interfaces, high-quality
            graphics, and seamless payment options. Live dealer games now bring real casinos to your
            screen. The future holds virtual reality casinos, blockchain-based betting, and secure
            instant payments for a smoother experience.
          </p>
        </article>

        {/* Future Section */}
        <article>
          <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <LineChart className="w-6 h-6" /> The Future of Casino Betting
          </h2>
          <p className="leading-relaxed text-gray-300">
            Online casino betting is growing rapidly, with innovations like virtual reality, AI,
            mobile-first design, and cryptocurrency payments. As more countries regulate online
            gambling, casino betting will become safer and more transparent, attracting even more
            players globally.
          </p>
        </article>

        {/* Conclusion */}
        <article className="bg-green-800/20 p-6 rounded-2xl border border-green-600 text-center">
          <h2 className="text-2xl font-bold text-green-400">Conclusion</h2>
          <p className="mt-4 text-gray-300">
            Casino betting offers the perfect blend of entertainment, thrill, and real rewards. From
            roulette and blackjack to slots and live dealer games, there’s something for everyone.
            Play responsibly on{" "}
            <span className="text-green-400 font-semibold">Adanibook</span> and enjoy a safe,
            exciting, and rewarding experience.
          </p>
        </article>
      </section>
    </main>
  );
}
