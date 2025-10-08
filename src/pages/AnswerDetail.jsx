
{/* Add New Answer Form */}
import React, { useState } from "react";

const AnswerDetail = () => {
  const [newAnswer, setNewAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAnswer.trim()) {
      alert("Please write an answer before submitting.");
      return;
    }
    console.log("Submitted answer:", newAnswer);
    setNewAnswer(""); // clear after submit
  };

  return (
    <div className="mt-4">
      <h5>Your Answer</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows="4"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Write your answer..."
        ></textarea>
        <button className="btn btn-warning" type="submit">
          Post Answer
        </button>
      </form>
    </div>
  );
};

export default AnswerDetail;