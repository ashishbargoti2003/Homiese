import React from 'react';

const RightPane = () => {
  const contacts = [
    { name: 'Ashish', status: 'online' },
    { name: 'Prajil', status: 'online' },
    { name: 'Mintu', status: 'online' },
    { name: 'Bhanu', status: '9m' },
  ];

  return (
    <aside className="right-pane">
      <h3>Your Pages</h3>
      <ul>
        <li>
          <img src="/conf.jpeg" alt="Page" />
          Confessions
        </li>
        <li>
          <img src="/iiitd.jpg" alt="Page" />
          IIITD'26
        </li>
      </ul>

      <h3>Contacts</h3>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <img src="/im3.jpeg" alt={contact.name} />
            {contact.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RightPane;
