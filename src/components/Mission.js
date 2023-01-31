import React from "react";
import "../styles/mission.css";

const Mission = (props) => {
  const { missionName, desc } = props;
  return (
    <div className="mission">
      <h4 className="mission-name">{missionName}</h4>
      <p className="mission-desc">{desc}</p>
      <div className="mission-btn mission-status">
        <button type="button" className="status-button">
          NOT A MEMBER
        </button>
      </div>
      <div className="mission-btn mission-join">
        <button type="button" className="join">
          JOIN MISSION
        </button>
      </div>
    </div>
  );
};

export default Mission;
