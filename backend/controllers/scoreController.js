import User from "../models/User.js";

export const updateScore = async (req, res) => {
  try {
    const { score } = req.body;

    const user = await User.findById(
      req.user._id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.totalScore += Number(score);

    await user.save();

    res.status(200).json({
      message: "Score Updated Successfully",
      totalScore: user.totalScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};