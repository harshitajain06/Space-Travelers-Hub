import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission, joinMission } from '../redux/missions/missions';
import '../styles/mission.css';

const Mission = (props) => {
  const {
    missionName, desc, id, reserved,
  } = props;

  const dispatch = useDispatch();

  const handleCancelMission = (id) => {
    dispatch(leaveMission(id));
  };

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="mission">
      <h4 className="mission-name">
        {missionName}
        {' '}
      </h4>
      <p className="mission-desc">{desc}</p>

      <div className="member-status">
        {reserved ? (
          <p className="active-member">Active member</p>
        ) : (
          <p className="inactive-member">Not a member</p>
        )}
      </div>

      <div className="join-cancel-btn">
        {reserved ? (
          <button
            type="button"
            className="cancel-mission"
            onClick={() => handleCancelMission(id)}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join-mission"
            onClick={() => handleJoinMission(id)}
          >
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
