import { faPeopleGroup, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import StudentCard from "../../components/StudentCard";

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
  const [showModal, setShowModal] = useState(false);
  const [reviewPercentage, setReviewPercentage] = useState(50);
  const [reviewMessage, setReviewMessage] = useState("");

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
        <div className="headerTop">
          <h1>Classroom: BS Information Technology</h1>
          <button>Join</button>
        </div>
        <div className="card_count">
          <div className="left">
            Total Students: <span>{students.length}</span>{" "}
          </div>
          <div className="right">
            <div className="icon">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </div>
          </div>
        </div>
      </div>
      <div className="student_cards">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
            handleReviewClick={handleReviewClick}
          />
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
            <div className="msgbox">
              <label htmlFor="message">Good Thing in me</label>
              <textarea
                id="message"
                rows="4"
                cols="10"
                resize="none"
                value={reviewMessage}
                onChange={(e) => setReviewMessage(e.target.value)}
                placeholder="Enter your review message here"
              ></textarea>
            </div>
            <div className="msgbox">
              <label htmlFor="message">Bad Thing in me</label>
              <textarea
                id="message"
                rows="4"
                cols="10"
                resize="none"
                value={reviewMessage}
                onChange={(e) => setReviewMessage(e.target.value)}
                placeholder="Enter your review message here"
              ></textarea>
            </div>

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
