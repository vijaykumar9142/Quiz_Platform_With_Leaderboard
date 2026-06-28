const QuestionCard = ({
  question,
  selected,
  setSelected
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        {question.question}
      </h2>

      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={`block w-full text-left p-3 mb-3 rounded border
          ${
            selected === option
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;