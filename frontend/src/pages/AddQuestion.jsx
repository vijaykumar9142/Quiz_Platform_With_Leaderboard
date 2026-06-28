import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddQuestion = () => {
  const [questionData, setQuestionData] = useState({
    subject: "",
    level: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.post(
        "http://localhost:5000/api/questions",
        questionData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Question Added Successfully!");

      setQuestionData({
        subject: "",
        level: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to Add Question"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">
            Add New Question
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <select
              name="subject"
              value={questionData.subject}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            >
              <option value="">
                Select Subject
              </option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>Java</option>
              <option>Python</option>
              <option>JavaScript</option>
            </select>

            <select
              name="level"
              value={questionData.level}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            >
              <option value="">
                Select Level
              </option>
              <option value="basic">
                Basic
              </option>
              <option value="intermediate">
                Intermediate
              </option>
              <option value="advanced">
                Advanced
              </option>
            </select>

            <input
              type="text"
              name="question"
              placeholder="Enter Question"
              value={questionData.question}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="option1"
              placeholder="Option 1"
              value={questionData.option1}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="option2"
              placeholder="Option 2"
              value={questionData.option2}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="option3"
              placeholder="Option 3"
              value={questionData.option3}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="option4"
              placeholder="Option 4"
              value={questionData.option4}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <input
              type="text"
              name="answer"
              placeholder="Correct Answer"
              value={questionData.answer}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Add Question
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddQuestion;