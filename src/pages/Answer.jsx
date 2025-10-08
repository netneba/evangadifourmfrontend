 {/* Answers Section */}
 import React from "react";

const Answer = ({ answers = [] }) => {
  return (
    <div className="mt-4">
      <h4>Answers</h4>
      {answers.length === 0 ? (
        <p>No answers yet. Be the first to reply!</p>
      ) : (
        answers.map((a) => (
          <div key={a.answerid} className="border rounded p-3 mb-3">
            <p>{a.answer}</p>
            <small className="text-muted">By {a.username}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Answer;