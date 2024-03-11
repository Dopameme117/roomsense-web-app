// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file if you want to use styles from there

function HomePage() {
  let navigate = useNavigate();

  // This function will be called when the "Enter RoomSense" button is clicked
  function enterApp() {
    navigate('/main'); // This will change the route to '/main'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>RoomSense</h1>
        <button className="App-enter" onClick={enterApp}>
          Enter RoomSense
        </button>
      </header>
    </div>
  );
}

export default HomePage;
