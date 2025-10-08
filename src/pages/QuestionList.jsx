import React from "react";
import { Link } from "react-router-dom";

const QuestionList = ({ questions = [] }) => {
  if (!Array.isArray(questions)) return <p>Invalid question data</p>;
  
  if (questions.length === 0) return <p>No questions yet.</p>;

  return (
    <div>
      {questions.map((q) => (
        <div key={q?.questionid} className="border p-3 mb-3 rounded">
          <h5>{q?.title || "No title"}</h5>
          <p>{q?.description || "No description"}</p>
          <small className="text-muted">Asked by {q?.username || "Unknown"}</small>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;