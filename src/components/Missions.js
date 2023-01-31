import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mission from "./Mission";
import "../styles/missions.css";
import { getMission } from "../redux/missions/missions";

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
    // eslint-disable-next-line
  }, []);

  const missions = useSelector((state) => state.missions);
  console.log(missions);
  return (
    <div className="missions-page">
      <div className="content">
        <h4 className="content-missions">Missions</h4>
        <h4 className="content-desc">Description</h4>
        <h4 className="content-status">Status</h4>
        <h4 className="content-join">Join/Leave</h4>
      </div>
      <div className="missions">
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            missionName={mission.mission_name}
            desc={mission.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
