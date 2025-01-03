import React from "react";
import "../styles/Dashboard.css";
import StatCard from "../components/StatCard";
import RecentActivities from "../components/RecentActivity";
import {
  faChild,
  faChildDress,
  faGraduationCap,
  faLayerGroup,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import StudentRatingCard from "../components/StudentRatingCard";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../Services/DashboardApis";

const students = [
  { name: "John Doe", rating: 85 },
  { name: "Jane Smith", rating: 92 },
  { name: "Alice Brown", rating: 60 },
  { name: "Bob Johnson", rating: 70 },
];

const Home = () => {
  const DashboardData = useQuery({
    queryKey: ["DashboardData"],
    queryFn: getDashboardData,
  });
  const cardData = [
    {
      title: "Classes",
      number: 27,
      icon: faLayerGroup,
      bgColor: "#FF5733",
    },
    {
      title: "Students",
      number: DashboardData?.data?.totalStudents,
      icon: faGraduationCap,
      bgColor: "#33B5FF",
    },
    {
      title: "Boys",
      number: DashboardData?.data?.totalBoys,
      icon: faChild,
      bgColor: "#28A745",
    },
    {
      title: "Girls",
      number: DashboardData?.data?.totalGirls,
      icon: faChildDress,
      bgColor: "#FFC107",
    },
    {
      title: "Reviews",
      number: 450,
      icon: faMessage,
      bgColor: "#6F42C1",
    },
  ];

  return (
    <div className="Dashboard">
      <div className="state_cards">
        {cardData.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            number={card.number}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      <div className="recent_activities">
        <RecentActivities />
      </div>
      <div className="student-rating-cards">
        {students.map((student, index) => (
          <StudentRatingCard
            key={index}
            name={student.name}
            rating={student.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
