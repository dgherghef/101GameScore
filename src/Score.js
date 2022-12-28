import { useState } from 'react';
import './App.css';

function Score(props) {
  const { playerName } = props;
  const [score, setScore] = useState(0);
  const [addNum, setAddNum] = useState();
  const [wins, setWins] = useState(0);

  const handleClick = (num) => {
    if (Number.isFinite(parseInt(num))) {
      let sc = 0;
      if (score === 101) sc = parseInt(num);
      else sc = parseInt(parseInt(score) + parseInt(num));
      if (sc < 101) setScore(sc);
      else if (sc === 101) setScore(101);
      else {
        setScore(0);
      }
      setAddNum('');
    }
  };
  const handleClickAdd = () => {
    const win = parseInt(wins) + 1;
    setWins(win);
  };

  return (
    <div>
      <h3>
        Wins: {wins}
        <button className='btnAdd' onClick={() => handleClickAdd()}>
          +
        </button>
      </h3>

      <div className='score'>{score}</div>
      <input
        id='score'
        type='tel'
        className='type-2'
        name={playerName}
        value={addNum}
        onChange={(e) => setAddNum(e.target.value)}
        required
      />
      <input
        type='submit'
        className='btnAdd1'
        value='+'
        onClick={() => handleClick(addNum)}
      />
    </div>
  );
}

export default Score;
