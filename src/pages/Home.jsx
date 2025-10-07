import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { AppState } from "../App";

const Home = () => {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("auth-token");
        if (!token) {
          navigate("/login"); // redirect if no token
          return;
        }

        const res = await axios.get("/questions/allquestion", {
          headers: { Authorization: "Bearer " + token },
        });
        setQuestions(res.data);
      } catch (err) {
        console.error("Failed to load questions:", err);
        setError("Failed to load questions");
      }
    };
    fetchQuestions();
  }, [navigate]);

  if (error) return <div className="container py-5">{error}</div>;

  return (
    <div className="container py-5">
      {/* Welcome user */}
      <h2 className="mb-4">
        Welcome, <span className="fw-semibold">{user?.username || "Guest"}</span>
      </h2>

      {/* Ask Question Button */}
      <Link to="/ask-question" className="btn btn-warning mb-4">
        Ask Question
      </Link>

      {/* Questions List */}
      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        questions.map((q) => (
          <div key={q.questionid} className="border p-3 mb-3 rounded">
            <Link to={`/question/${q.questionid}`}>
              <h5>{q.title}</h5>
            </Link>
            <p>{q.description}</p>
            <small className="text-muted">Asked by {q.username}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
