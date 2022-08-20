import React from 'react';
import Controls from '../controls/controls';

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
      <Controls />
    </div>
  );
}

export default App;
