import React from "react";
import StudentCard from "../../components/StudentCard";
import ClassRoomCard from "./ClassRoomCard";
const student = [
  {
    name: "John Doe",
    rollNumber: "BSIT-01",
    percentage: 85,
    role: "CR",
  },
];
const StdProfileMain = () => {
  return (
    <>
      <div className="profilemain">
        <div className="profilemaincards">
          <StudentCard
            student={student[0]}
            index={0}
            handleReviewClick={() => {}}
            showBTn={false}
          />
          <ClassRoomCard />
        </div>
        <div className="recentactivities">
          <h3>Recent Reviews</h3>
          <div className="review">
            <div className="top">
              <span className="name">anonymous</span>
              <span className="date">3 days ago</span>
            </div>
            <div className="reviewpercentage">
              <span className="title">percentage</span>
              <span className="number">90%</span>
            </div>
            <div className="reviewMsg">
              <div className="pros">
                <span className="title">Good Things</span>
                <span className="msg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quae, voluptate, quidem quod quisquam quas quibusdam
                </span>
              </div>
              <div className="cons">
                <span className="title">Bad Things</span>
                <span className="msg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  quae, voluptate, quidem quod quisquam quas quibusdam
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StdProfileMain;
