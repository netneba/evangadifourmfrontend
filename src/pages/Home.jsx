import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { AppState } from "../App";

// import bgImage from "../assets/bg-svg-f.jpg";
import styles from "./home.module.css";
// serch icon fuctionality starts here 
import { IoSearchOutline } from "react-icons/io5";
// import styles from "./home.module.css"; // Make sure the CSS is imported



const Home = () => {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  //  a useEffect for filtering questions
  useEffect(() => {
    const filtered = questions.filter((q) =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestions(filtered);
  }, [searchTerm, questions]);

  // a useEffect for fetching quastion
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
    <div className={styles.bgWrap}>
      <div className="container py-1">
        {/* search */}

        <div className={styles.searchcont}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.search_icon}>
            <IoSearchOutline size={25} />
          </button>
        </div>

        {/* Welcome user */}
        <h2 className="mb-4">
          Welcome,{" "}
          <span className="fw-semibold">{user?.username || "Guest"}</span>
        </h2>

        {/* Ask Question Button */}
        <Link to="/ask-question" className="btn btn-warning mb-4">
          Ask Question
        </Link>

        {/* Questions List */}

        {filteredQuestions.length === 0 ? (
          <p>No questions yet.</p>
        ) : (
          filteredQuestions.map((q) => (
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
    </div>
  );
};

export default Home;
