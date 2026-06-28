import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/leaderboard"
      );

      setLeaders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            🏆 Leaderboard
          </h1>

          {loading ? (
            <h2 className="text-center text-xl">
              Loading...
            </h2>
          ) : (
            <>
              {/* Top 3 */}
              {leaders.length >= 3 && (
                <div className="grid md:grid-cols-3 gap-5 mb-10">
                  <div className="bg-gray-300 p-6 rounded-xl text-center shadow">
                    <h2 className="text-4xl">🥈</h2>
                    <h3 className="text-xl font-bold mt-2">
                      {leaders[1]?.name}
                    </h3>
                    <p>
                      {leaders[1]?.totalScore} Points
                    </p>
                  </div>

                  <div className="bg-yellow-400 p-6 rounded-xl text-center shadow-lg scale-105">
                    <h2 className="text-5xl">🥇</h2>
                    <h3 className="text-2xl font-bold mt-2">
                      {leaders[0]?.name}
                    </h3>
                    <p>
                      {leaders[0]?.totalScore} Points
                    </p>
                  </div>

                  <div className="bg-orange-300 p-6 rounded-xl text-center shadow">
                    <h2 className="text-4xl">🥉</h2>
                    <h3 className="text-xl font-bold mt-2">
                      {leaders[2]?.name}
                    </h3>
                    <p>
                      {leaders[2]?.totalScore} Points
                    </p>
                  </div>
                </div>
              )}

              {/* Leaderboard Table */}
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="py-4">Rank</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Score</th>
                    </tr>
                  </thead>

                  <tbody>
                    {leaders.map((user, index) => (
                      <tr
                        key={user._id}
                        className="text-center border-b hover:bg-gray-50"
                      >
                        <td className="py-4">
                          {index === 0
                            ? "🥇"
                            : index === 1
                            ? "🥈"
                            : index === 2
                            ? "🥉"
                            : index + 1}
                        </td>

                        <td>{user.name}</td>

                        <td>
                          {user.email || "-"}
                        </td>

                        <td>
                          {user.totalScore}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {leaders.length === 0 && (
                <div className="text-center mt-8 text-gray-500">
                  No users found.
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Leaderboard;