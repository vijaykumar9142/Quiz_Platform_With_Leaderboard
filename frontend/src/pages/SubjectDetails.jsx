import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SubjectDetails = () => {
  const { subject } = useParams();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            {subject} Quiz
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Basic */}
            <div className="bg-green-500 text-white p-8 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold">Basic</h2>

              <p className="mt-4">
                Beginner Level Questions
              </p>

              <p className="mt-2 text-sm">
                20 Questions • 1 Point Each
              </p>

              <Link to={`/quiz/${subject}/basic`}>
                <button className="mt-6 bg-white text-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                  Start Quiz
                </button>
              </Link>
            </div>

            {/* Intermediate */}
            <div className="bg-yellow-500 text-white p-8 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold">
                Intermediate
              </h2>

              <p className="mt-4">
                Medium Level Questions
              </p>

              <p className="mt-2 text-sm">
                20 Questions • 3 Points Each
              </p>

              <Link to={`/quiz/${subject}/intermediate`}>
                <button className="mt-6 bg-white text-yellow-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                  Start Quiz
                </button>
              </Link>
            </div>

            {/* Advanced */}
            <div className="bg-red-500 text-white p-8 rounded-xl text-center shadow-lg">
              <h2 className="text-2xl font-bold">
                Advanced
              </h2>

              <p className="mt-4">
                Expert Level Questions
              </p>

              <p className="mt-2 text-sm">
                20 Questions • 5 Points Each
              </p>

              <Link to={`/quiz/${subject}/advanced`}>
                <button className="mt-6 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
                  Start Quiz
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubjectDetails;