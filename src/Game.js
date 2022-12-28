import './App.css';
import React, { useState } from 'react';
import Start from './Start';

function Game() {
  const [name, setName] = useState();
  const [player, setPlayer] = useState([]);
  const [message, setMessage] = useState('');

  const handleClick = (name) => {
    if (typeof name === 'undefined') setMessage('No face no name no number');
    else {
      setPlayer([...player, { name: name, score: 0, wins: 0 }]);
      setMessage('');
      setName('');
    }
  };

  return (
    <div>
      <div classname=''>
        <h1>101 score game</h1>
        <div className='center-block'>
          <input
            type='text'
            className='type-2'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button className='btnAdd' onClick={() => handleClick(name)}>
            +
          </button>
        </div>
        <p>{message}</p>
        <div className='center'>
          {player.map((el) => (
            <Start playerName={el.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
