import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import basicQuiz from "../assets/data/basicQuiz";
import intermediateQuiz from "../assets/data/intermediateQuiz";
import advancedQuiz from "../assets/data/advancedQuiz";

const Quiz = () => {
  const { subject, level } = useParams();

  let questions = [];
  let pointsPerQuestion = 1;

  switch (level?.toLowerCase()) {
    case "basic":
      questions = basicQuiz[subject] || [];
      pointsPerQuestion = 1;
      break;

    case "intermediate":
      questions = intermediateQuiz[subject] || [];
      pointsPerQuestion = 3;
      break;

    case "advanced":
      questions = advancedQuiz[subject] || [];
      pointsPerQuestion = 5;
      break;

    default:
      questions = [];
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreSaved, setScoreSaved] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + pointsPerQuestion);
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  // Save score after quiz completion
  useEffect(() => {
    const saveScore = async () => {
      try {
        const userInfo = JSON.parse(
          localStorage.getItem("userInfo")
        );

        if (!userInfo?.token) return;

        await axios.post(
          "http://localhost:5000/api/score",
          { score },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        setScoreSaved(true);
      } catch (error) {
        console.log("Score Save Error:", error);
      }
    };

    if (
      currentQuestion >= questions.length &&
      !scoreSaved &&
      questions.length > 0
    ) {
      saveScore();
    }
  }, [
    currentQuestion,
    questions.length,
    score,
    scoreSaved,
  ]);

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">
          No Questions Found for {subject}
        </h1>

        <p className="mt-4 text-gray-600">
          Please check if the data exists for this level.
        </p>
      </div>
    );
  }

  // Result Page
  if (currentQuestion >= questions.length) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          Quiz Completed 🎉
        </h1>

        <h2 className="text-2xl mt-4">
          Subject: {subject}
        </h2>

        <h2 className="text-2xl mt-2">
          Score: {score}
        </h2>

        <p className="mt-2">
          Total Questions: {questions.length}
        </p>

        {scoreSaved ? (
          <p className="text-green-600 mt-4 font-semibold">
            Score saved successfully ✅
          </p>
        ) : (
          <p className="text-gray-500 mt-4">
            Saving score...
          </p>
        )}
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-5">
        {subject} - {level.toUpperCase()}
      </h2>

      <h2 className="text-lg mb-5">
        Question {currentQuestion + 1} / {questions.length}
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl mb-6">
          {question.question}
        </h3>

        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="block w-full p-3 mb-3 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;