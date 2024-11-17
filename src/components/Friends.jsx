import React from 'react';

const Friends = () => {
  const friends = [
    { name: 'Ashish', mutual: 15 },
    { name: 'Prajil', mutual: 20 },
  ];

  return (
    <section className="friends-section">
      <h3>Friends</h3>
      {friends.map((friend, index) => (
        <div key={index} className="friend-card">
          <img
            src="/im3.jpeg" /* Use the same profile picture placeholder */
            alt={`${friend.name}`}
          />
          <div className="friend-info">
            <p>{friend.name}</p>
            <p style={{ fontSize: '12px', color: '#777' }}>
              {friend.mutual} mutual friends
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Friends;
