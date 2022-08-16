import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="player-info__wrapper">
        <div className="player-info player1 player--current">
          <div className="player-info__title">Player 1</div>
          <div className="player-info__total-score">0</div>
          <div className="player-info__current-score">0</div>
        </div>
        <div className="player-info player2">
          <div className="player-info__title">Player 2</div>
          <div className="player-info__total-score">0</div>
          <div className="player-info__current-score">0</div>
        </div>
      </div>
      <div className="controls">
        <div className="controls__new-game">New game</div>
        <div className="controls__dice dice1"></div>
        <div className="controls__dice dice2"></div>
        <button className="controls__dice-roll">Roll dice</button>
        <button className="controls__score-hold">Hold</button>
        <input className="controls__set-limit" type="text" />
      </div>
    </div>
  );
}

export default App;
