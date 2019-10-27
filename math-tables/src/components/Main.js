import React, { useState } from 'react';
import TableRow from './TableRow';

function Main() {
  const [int, setInt] = useState(2);
  const name = localStorage.getItem('name');

  let multiples = Array(10)
    .fill()
    .map((el, index) => index + 1);

  function displayTable() {
    return multiples.map((multiple, index) => {
      return <TableRow key={index} multiple={multiple} number={int} />;
    });
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>{name}'s Math Tables</h1>
      </header>
      <div className="main">
        <div className="form-container">
          <form>
            <input
              autoFocus
              type="number"
              value={int}
              onChange={event => setInt(event.target.value)}
            />
          </form>
        </div>
        {int && <div className="table-container">{displayTable()}</div>}
      </div>
    </div>
  );
}

export default Main;
