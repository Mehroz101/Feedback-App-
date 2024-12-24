import React from "react";
import ClassRoomCard from "../components/ClassRoomCard";

const Home = () => {
  return (
    <>
      <div className="classroompage">
        <h1>Classrooms</h1>
        <div className="classrooms">
          <ClassRoomCard />
          <ClassRoomCard />
          <ClassRoomCard />
        </div>
      </div>
    </>
  );
};

export default Home;
