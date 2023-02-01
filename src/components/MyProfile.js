import React from "react";
import { useSelector } from "react-redux";
import "../styles/myProfile.css";

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div className="profile">
      <div className="prof-missions">
        <h4>My Missions</h4>
        <ul>
          {missions.map((mission) =>
            mission.reserved ? (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className="prof-rockets">
        <h4>Rockets</h4>
        <ul>
          <li>Telstar</li>
          <li>Falcon 9</li>
          <li>Starship</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
