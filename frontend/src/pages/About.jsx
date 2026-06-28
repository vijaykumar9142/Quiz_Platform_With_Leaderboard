import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-5xl font-bold">About Quiz India</h1>
          <p className="mt-4 text-lg">
            Learn, Practice, Compete, and Grow.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8">
              Quiz India is an online quiz platform designed to
              help students improve their knowledge through
              interactive quizzes. Our mission is to make learning
              engaging, competitive, and rewarding.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                📚 Learn
              </h3>

              <p className="mt-3 text-gray-600">
                Practice quizzes from various subjects including
                Mathematics, Science, Programming, GK, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-green-600">
                🏆 Compete
              </h3>

              <p className="mt-3 text-gray-600">
                Earn points and climb the leaderboard by answering
                questions correctly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-purple-600">
                🚀 Grow
              </h3>

              <p className="mt-3 text-gray-600">
                Improve your skills through Basic, Intermediate,
                and Advanced level quizzes.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white text-center p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-600">
                20+
              </h3>
              <p>Subjects</p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-green-600">
                1000+
              </h3>
              <p>Questions</p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-yellow-600">
                3
              </h3>
              <p>Difficulty Levels</p>
            </div>

            <div className="bg-white text-center p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-red-600">
                ∞
              </h3>
              <p>Learning Opportunities</p>
            </div>
          </div>

          {/* Developer Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-bold mb-4">
              Developer
            </h2>

            <p className="text-gray-700">
              Quiz India is developed to provide a modern and
              engaging learning experience for students. The
              platform encourages knowledge-building through
              quizzes and healthy competition.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;