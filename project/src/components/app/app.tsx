import React from 'react';
import Controls from '../controls/controls';
import PlayerGroup from '../player-group/player-group';

function App(): JSX.Element {
  return (
    <div className="container">
      <PlayerGroup />
      <Controls />
    </div>
  );
}

export default App;
