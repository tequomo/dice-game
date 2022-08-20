function Controls() {
  return (
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
  )
}

export default Controls;
