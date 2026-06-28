import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Question",
  questionSchema
);