import React from 'react';
import CountCharacter from './CountCharacter';

const CountCharacter = () => {
  function CountCharacter(str) {
    const frequency = {};
    for (let char of str) {
      if (frequency[char]) {
        frequency[char] += 1;
      } else {
        frequency[char] = 1;
      }
    }
    return frequency;
  }

  const myString = "hello world";
  const result = App(myString);
  console.log(result);

  // Return JSX so React is happy
  return (
    <div>
      <h2>Character Frequency</h2>
      <ul>
        {Object.entries(result).map(([char, count]) => (
          <li key={char}>
            '{char}' : {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountCharacter;
