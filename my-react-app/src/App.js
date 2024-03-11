import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// Assuming you have these components created as per previous discussions
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

// If HomePage is not in a separate file, define it here temporarily
function HomePageTemp() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>RoomSense</h1>
        <button className="App-enter" onClick={() => navigate('/main')}>
          Enter RoomSense
        </button>
      </header>
    </div>
  );
}

// If MainPage is not in a separate file, define it here temporarily
function MainPageTemp() {
  return (
    <div>
      <h1>Welcome to the main content of RoomSense</h1>
    </div>
  );
}

export default App;
