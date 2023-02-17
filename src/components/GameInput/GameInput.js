import React, { useState } from 'react';

function GameInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 letters');
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        autoFocus
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        disabled={gameStatus === 'lost'}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GameInput;
