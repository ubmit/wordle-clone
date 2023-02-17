import React from 'react';

import { range, cx } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  return <span className={cx('cell', status)}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <Cell
          key={num}
          letter={result && result[num].letter}
          status={result && result[num].status}
        />
      ))}
    </p>
  );
}

export default Guess;
