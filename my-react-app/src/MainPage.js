// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure this is the correct path to your CSS file

function MainPage() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Main Content of RoomSense</h1>
      {/* Add more content and components as needed */}
      
      {/* This button will take you back to the homepage */}
      <button className="return-home" onClick={() => navigate('/')}>
        Return to Main Screen
      </button>
    </div>
  );
}

export default MainPage;
