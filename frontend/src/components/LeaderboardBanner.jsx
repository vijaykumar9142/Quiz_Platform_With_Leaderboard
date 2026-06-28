import { Link } from "react-router-dom";

const LeaderboardBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-2xl">
      <h2 className="text-3xl font-bold">
        🏆 Top Leaderboard
      </h2>

      <Link to="/leaderboard">
        <button className="mt-5 bg-white text-orange-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          View Full Leaderboard
        </button>
      </Link>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white text-black p-4 rounded-lg">
          🥇 Vishal - 980 Points
        </div>

        <div className="bg-white text-black p-4 rounded-lg">
          🥈 Rahul - 950 Points
        </div>

        <div className="bg-white text-black p-4 rounded-lg">
          🥉 Aman - 920 Points
        </div>
      </div>

      <button className="mt-5 bg-white text-orange-600 px-5 py-2 rounded-lg font-semibold">
        View Full Leaderboard
      </button>
    </div>
  );
};

export default LeaderboardBanner;