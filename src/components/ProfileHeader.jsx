import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <img
        className="cover-image"
        src="/cover.jpeg"
        alt="Cover"
      />
      <div className="profile-details">
        <img
          className="profile-picture"
          src="/pp.jpg"
          alt="Profile"
        />
        <h2>#UserName</h2>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
