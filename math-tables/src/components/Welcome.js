import React, { useState } from 'react';
import Main from './Main';

function Welcome() {
  const [name, setName] = useState('');
  const [nameProvided, setNameProvided] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (name) {
      localStorage.setItem('name', name);
      setNameProvided(true);
    }
  }

  return !nameProvided ? (
    <div className="welcome-screen">
      <h1>Welcome to Math Tables</h1>
      <h2>Please enter your name</h2>
      <form className="name-input-form" onSubmit={e => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="YOUR NAME"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">ENTER</button>
      </form>
    </div>
  ) : (
    <Main />
  );
}

export default Welcome;
