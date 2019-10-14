import React, { useState } from 'react';
import AnswerField from './components/AnswerField';
import './App.css';

function App() {
  const [int, setInt] = useState(2);

  let multiples = Array(10)
    .fill()
    .map((el, index) => index + 1);

  function displayTable() {
    return multiples.map((el, index) => {
      return (
        <div key={index} className="table-line">
          <span>{el}</span>
          <span>X</span>
          <span>{int}</span>

          <span> = </span>
          <span>{<AnswerField answer={el * int} />}</span>
        </div>
      );
    });
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Norah's Math Tables</h1>
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

export default App;
