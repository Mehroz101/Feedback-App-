import React from "react";
import { useNavigate } from "react-router-dom";

const ClassRoomCard = ({ classroom }) => {
  const navigate = useNavigate();
  return (
    <div className="classroom">
      <div className="classroom_image">
        <img src={classroom?.img} alt="Classroom" loading="lazy" />
      </div>
      <div className="classroom_content">
        <div className="classroom_text title">
          <h3>{classroom?.title}</h3>
        </div>
        <div className="classroom_text location">
          <span>{classroom?.location}</span>
        </div>
        <div className="classroom_text numberofstudent">
          <span className="title">No. of Students:</span>
          <span className="number">{classroom?.numberofstudent}</span>
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
