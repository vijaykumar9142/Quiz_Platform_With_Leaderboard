import { Link } from "react-router-dom";

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject}`}>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer">
        <h3 className="text-xl font-bold text-blue-600">
          {subject}
        </h3>

        <p className="mt-3 text-gray-600">
          Practice quizzes from {subject}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          Open
        </button>
      </div>
    </Link>
  );
};

export default SubjectCard;