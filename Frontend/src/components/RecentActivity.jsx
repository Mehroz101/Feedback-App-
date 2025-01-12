import React from "react";
import "../styles/RecentActivities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const activities = [
  {
    id: 1,
    reviewer: "John Doe",
    reviewed: "Jane Smith",
    review: "Excellent work in class! Keep it up.",
    time: "2 hours ago",
    reviewType: "positive"
  },
  {
    id: 2,
    reviewer: "Alice Johnson",
    reviewed: "Mark Thompson",
    review: "Good participation in class discussions.",
    time: "4 hours ago",
    reviewType: "neutral"
  },
  {
    id: 3,
    reviewer: "James Brown",
    reviewed: "Sara Lee",
    review: "Needs improvement in homework submissions.",
    time: "1 day ago",
    reviewType: "negative"
  },
];

const RecentActivities = () => {
  return (
    <div className="recent_activities">
      <h3 className="activities_title">Recent Activities</h3>
      <ul className="activities_list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity_item">
            <div className={`activity_badge ${activity.reviewType}`}>
              {activity.reviewType.charAt(0).toUpperCase() + activity.reviewType.slice(1)}
            </div>
            <div className="activity_details">
              <div className="activity_header">
                <div className="badge reviewer_badge">
                  {activity.reviewer[0]}
                </div>
                <p className="activity_description">
                  <strong>{activity.reviewer}</strong> reviewed <strong>{activity.reviewed}</strong>
                </p>
              </div>
              <p className="review_content">{activity.review}</p>
            </div>
            <span className="activity_time">{activity.time}</span>
            <div className="close_icon">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
