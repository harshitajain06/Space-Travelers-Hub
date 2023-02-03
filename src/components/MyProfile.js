import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const reservedMissions = missions.filter(
    (mission) => mission.reserved !== false,
  );
  const reservedRockets = rockets.filter((rocket) => rocket.reserved !== false);
  return (
    <div className="profile">
      <div className="prof-missions">
        <h4>My Missions</h4>
        <ul>
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="prof-rockets">
        <h4>Rockets</h4>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
