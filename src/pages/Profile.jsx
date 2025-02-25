import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [progress, setProgress] = useState(40);

  return (
    <div className="container">
      <h1>👤 Your Profile</h1>
      <p>Track your progress and achievements here.</p>

      <h3>🎯 Learning Progress</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>{progress}%</div>
      </div>

      <button onClick={() => setProgress(progress + 10)}>Increase Progress</button>
    </div>
  );
};

export default Profile;
