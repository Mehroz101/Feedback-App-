import React, { useState } from "react";
import "../styles/StudentRatingCard.css";
import { Knob } from 'primereact/knob';

const StudentRatingCard = ({ name }) => {
  const [value, setValue] = useState(70);

  return (
    <div className="student-card">
      <div className="rating-knob">
        <Knob
          value={value}
          onChange={(e) => setValue(e.value)}
          style={{ 
            borderRadius: '50%', // Ensuring the knob has rounded edges
          }}
          className="custom-knob" // Apply a custom class for further styling
        />
      </div>
      <div className="student-name">{name}</div>
    </div>
  );
};

export default StudentRatingCard;
