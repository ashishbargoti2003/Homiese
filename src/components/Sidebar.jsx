import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <h3>Menu</h3>
        <ul>
          <li>Home</li>
          <li>Discussion</li>
          <li>Friends</li>
          <li>Events</li>
          <li>Photos</li>
          <li>Files</li>
        </ul>
      </div>
      <div>
        <h3>Your Favorites</h3>
        <ul>
          <li>Confessions</li>
          <li>GymBros UK</li>
          <li>InternShips</li>
          <li>DTUMentors</li>
          <li>Basketball</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
