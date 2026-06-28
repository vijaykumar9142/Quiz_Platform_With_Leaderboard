import Navbar from "../components/Navbar";
import SubjectCard from "../components/SubjectCard";
import LeaderboardBanner from "../components/LeaderboardBanner";
import Footer from "../components/Footer";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Computer Science",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "DBMS",
  "Operating System",
  "Networking",
  "DSA",
  "GK",
  "Current Affairs",
  "Reasoning",
];

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="py-12 text-center bg-gray-100">
        <h1 className="text-4xl font-bold">
          Welcome to Quiz India
        </h1>

        <p className="text-gray-600 mt-3">
          Test your knowledge and compete with others.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Quiz Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <LeaderboardBanner />
      </section>

      <Footer />
    </>
  );
};

export default Home;