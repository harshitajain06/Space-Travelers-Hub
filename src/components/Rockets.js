import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveRocket } from '../redux/rockets/rockets';
import '../styles/rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="rocket-ul">
        {rockets.map((r) => (
          <li key={r.id} className="rocket-li">
            <img className="rocket-img" src={r.flickr_images} alt={r.id} />
            <div className="rocket-txt">
              <h2>{r.name}</h2>
              {r.reserved === true ? <span className="reserveBtn">&bull; Reserved</span> : ''}
              <p>{r.description}</p>
              {r.reserved === false ? <button className="btn1" onClick={() => { dispatch(reserveRocket(r.id)); }} type="button">MAKE RESERVATION</button> : <button className="btn2" onClick={() => { dispatch(cancelReservation(r.id)); }} type="button">CANCEL RESERVATION</button>}

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
