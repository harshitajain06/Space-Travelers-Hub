import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { rocketsData } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rocketsData());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
