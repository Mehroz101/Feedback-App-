import React from "react";
import { useNavigate } from "react-router-dom";

const ClassRoomCard = () => {
  const navigate = useNavigate();
  return (
    <div className="classroom">
      <div className="classroom_image">
        <img
          src="https://via.placeholder.com/150"
          alt="Classroom"
          loading="lazy"
        />
      </div>
      <div className="classroom_content">
        <div className="classroom_text title">
          <h3>BS Information Technology</h3>
        </div>
        <div className="classroom_text location">
          <span>Emerson University Multan</span>
        </div>
        <div className="classroom_text numberofstudent">
          <span className="title">No. of Students:</span>
          <span className="number">20</span>
        </div>
        <div className="classroom_button">
          <button
            onClick={() => {
              navigate("/classroom");
            }}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassRoomCard;
