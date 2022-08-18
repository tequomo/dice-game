import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="player-info__wrapper">
        <div className="player-info player1 player--current">
          <div className="player-info__title">Player 1</div>
          <div className="player-info__total-score">0</div>
          <div className="player-info__current-score">
            <h3 className="current-score__title">Current</h3>
            <span className="current-score__value">0</span>
          </div>
        </div>
        <div className="player-info player2">
          <div className="player-info__title">Player 2</div>
          <div className="player-info__total-score">0</div>
          <div className="player-info__current-score">
            <h3 className="current-score__title">Current</h3>
            <span className="current-score__value">0</span>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="controls__new-game">New game</button>
        <div className="controls__dice dice1">
          <img src="./img/dice-3.png" alt="" />
        </div>
        <div className="controls__dice dice2">
          <img src="./img/dice-4.png" alt="" />
        </div>
        <button className="controls__dice-roll">Roll dice</button>
        <button className="controls__score-hold">Hold</button>
        <input className="controls__final-score" type="text" placeholder="final score"/>
      </div>
    </div>
  );
}

export default App;
