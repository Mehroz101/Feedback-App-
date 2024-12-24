import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const students = [
  {
    name: "John Doe",
    rollNumber: "BSIT-01",
    percentage: 85,
    role: "CR",
  },
  {
    name: "Jane Smith",
    rollNumber: "BSIT-02",
    percentage: 92,
    role: "Admin",
  },
  {
    name: "Sam Wilson",
    rollNumber: "BSIT-03",
    percentage: 78,
    role: "GR",
  },
  {
    name: "Alice Johnson",
    rollNumber: "BSIT-04",
    percentage: 88,
    role: "Std",
  },
];

const ClassRoomPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [reviewPercentage, setReviewPercentage] = useState(50);
  const [reviewMessage, setReviewMessage] = useState("");
  const radius = 60; // Reduced Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (50 / 100) * circumference;
  const handleReviewClick = () => {
    console.log("Review button clicked");
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleSubmitReview = () => {
    alert(
      `Review Submitted!\nPercentage: ${reviewPercentage}%\nMessage: ${reviewMessage}`
    );
    setShowModal(false);
  };
  return (
    <div className="classroom_page">
      <div className="classroom_header">
        <h1>Classroom: BS Information Technology</h1>
        <p>Total Students: {students.length}</p>
      </div>
      <div className="student_cards">
        {students.map((student, index) => (
          <div key={index} className="student_card">
            <div className={`badge ${student.role.toLowerCase()}`}>
              {student.role}
            </div>
            <div className="student_info">
              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNumber}</p>
            </div>
            <div className="score-card">
              <svg className="circle" width="140" height="140">
                <circle
                  className="background"
                  cx="70"
                  cy="70"
                  r={radius}
                ></circle>
                <circle
                  className="progress"
                  cx="70"
                  cy="70"
                  r={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                ></circle>
              </svg>
              <div className="score">{"50"}%</div>
            </div>
            <button
              className="review_button"
              onClick={() => {
                handleReviewClick();
              }}
            >
              Add Review
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <div className="topmodel">
              <h2>Give Your Review</h2>
              <FontAwesomeIcon icon={faTimes} onClick={handleCloseModal} />
            </div>
            <div className="percentage_select">
              <label htmlFor="percentage">Percentage:</label>
              <input
                type="range"
                id="percentage"
                min="0"
                max="100"
                value={reviewPercentage}
                onChange={(e) => setReviewPercentage(e.target.value)}
                className="review_slider"
              />
              <span className="givenpercentage">{reviewPercentage}%</span>
            </div>

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows="4"
              cols="10"
              resize="none"
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
              placeholder="Enter your review message here"
            ></textarea>

            <div className="modal_actions">
              <button className="submit_button" onClick={handleSubmitReview}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassRoomPage;
