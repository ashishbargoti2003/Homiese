import React from 'react';
import Sidebar from './components/Sidebar';
import ProfileHeader from './components/ProfileHeader';
import About from './components/About';
import Friends from './components/Friends';
import RightPane from './components/RightPane';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <ProfileHeader />
        <About />
        <Friends />
      </main>
      <RightPane />
    </div>
  );
};

export default App;
