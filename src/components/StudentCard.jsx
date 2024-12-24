import React from "react";

const StudentCard = ({ student, index, handleReviewClick, showBTn = true }) => {
  const radius = 60; // Reduced Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (50 / 100) * circumference;
  return (
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
          <circle className="background" cx="70" cy="70" r={radius}></circle>
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
      {showBTn && (
        <button
          className="review_button"
          onClick={() => {
            handleReviewClick();
          }}
        >
          Add Review
        </button>
      )}
    </div>
  );
};

export default StudentCard;
