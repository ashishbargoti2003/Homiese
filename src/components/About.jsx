import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <h3>About</h3>
      <div className="about-details">
        <div>
          <img src="/icon.jpg" alt="Work" />
          <p>Student at IIITD</p>
        </div>
        <div>
          <img src="/icon.jpg" alt="Relationship" />
          <p>Single</p>
        </div>
        <div>
          <img src="/icon.jpg" alt="Location" />
          <p>Lives in Delhi, India</p>
        </div>
        <div>
          <img src="/icon.jpg" alt="Contact" />
          <p>Contact: +91 755 666 214</p>
        </div>
      </div>
    </section>
  );
};

export default About;
