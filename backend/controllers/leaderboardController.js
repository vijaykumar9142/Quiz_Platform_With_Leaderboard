import User from "../models/User.js";

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find({})
      .select("name totalScore")
      .sort({ totalScore: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};