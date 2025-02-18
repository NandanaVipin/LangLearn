import React from "react";
import "./LessonCard.css";

const LessonCard = ({ title, description }) => {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LessonCard;
