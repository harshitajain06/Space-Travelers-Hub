import React from "react";
import { useDispatch } from "react-redux";
import { leaveMission, joinMission } from "../redux/missions/missions";
import "../styles/mission.css";
// import PropTypes from "prop-types";

const Mission = (props) => {
  const { missionName, desc, id, joined } = props;

  const dispatch = useDispatch();

  const handleCancelMission = (id) => {
    dispatch(leaveMission(id));
  };

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="mission">
      <h4 className="mission-name">{missionName} </h4>
      <p className="mission-desc">{desc}</p>

      <div className="status-button">
        {joined ? <p>Active member</p> : <p>Not a member</p>}
      </div>

      <div>
        {joined ? (
          <button
            type="button"
            className="join"
            onClick={() => handleCancelMission(id)}
          >
            Cancel mission
          </button>
        ) : (
          <button
            type="button"
            className="join"
            onClick={() => handleJoinMission(id)}
          >
            Join mission
          </button>
        )}
      </div>
    </div>
  );
};

// Mission.propTypes = {
//   missionName: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   joined: PropTypes.bool.isRequired,
// };

export default Mission;
