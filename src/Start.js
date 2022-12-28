import './App.css';
import Score from './Score';

function Start(props) {
  const { playerName } = props;
  console.log('Player:' + playerName);
  return (
    <div>
      <div className='box'>
        <h3>Name: {playerName}</h3>
        <Score playerName={playerName} />
      </div>
    </div>
  );
}

export default Start;
