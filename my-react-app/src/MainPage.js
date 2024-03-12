// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RadarDisplay from './RadarDisplay'; // Make sure the path to RadarDisplay is correct
import './App.css'; // Make sure this is the correct path to your CSS file

function MainPage() {
  let navigate = useNavigate();

  return (
    <div className="MainPage">
      <h1>Main Content of RoomSense</h1>
      <RadarDisplay /> {/* Include the RadarDisplay component to render the radar */}
      <button className="return-home" onClick={() => navigate('/')}>
        Return to Main Screen
      </button>
    </div>
  );
}

export default MainPage;
