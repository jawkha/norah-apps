import React, { useState } from 'react';

function AnswerField({ answer }) {
  const [providedAnswer, setProvidedAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState();

  // const emojisForCorrectAnswers = ['🏆', '👑', '🍓', '🍎', '🍪', '🧁', '🏅', '🥇'];
  // const emojisForInorrectAnswers = ['🧐', '🙉', '🌶', '🔭'];

  const emojisForCorrectAnswers = ['🏆'];
  const emojisForInorrectAnswers = ['🙉'];

  function checkAnswer(event) {
    event.preventDefault();
    console.log(`${typeof providedAnswer} and ${typeof answer}`);
    if (providedAnswer === answer) {
      console.log(`Answer is correct. The correct answer is ${answer}`);
      setAnswerStatus('correct');
    } else {
      console.log(`Answer is incorrect. The correct answer is ${answer}`);
      setAnswerStatus('incorrect');
    }
  }

  function setAnswer(event) {
    setAnswerStatus('');
    setProvidedAnswer(parseInt(event.target.value, 10));
  }

  function displayEmoji(emojisArray) {
    const arrayLength = emojisArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return emojisArray[randomIndex];
  }

  return (
    <form className="answer-form" onSubmit={event => checkAnswer(event)}>
      <input
        type="number"
        className="answer-field"
        value={providedAnswer}
        onChange={event => setAnswer(event)}
      ></input>
      {!answerStatus && <button type="submit">CHECK</button>}
      {answerStatus && (
        <span class="answer-emoji">
          {answerStatus === 'correct'
            ? displayEmoji(emojisForCorrectAnswers)
            : displayEmoji(emojisForInorrectAnswers)}
        </span>
      )}
    </form>
  );
}

export default AnswerField;
