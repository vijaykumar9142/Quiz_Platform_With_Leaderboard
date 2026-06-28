import Question from "../models/Question.js";

export const addQuestion = async (
  req,
  res
) => {
  try {
    const {
      subject,
      level,
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
    } = req.body;

    const newQuestion =
      await Question.create({
        subject,
        level,
        question,
        options: [
          option1,
          option2,
          option3,
          option4,
        ],
        answer,
      });

    res.status(201).json(
      newQuestion
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getQuestions =
  async (req, res) => {
    try {
      const questions =
        await Question.find({});

      res.json(questions);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };