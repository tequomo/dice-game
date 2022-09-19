type DiceProps = {
  diceValues: number[],
}

function Dice({ diceValues }: DiceProps) {

  return (
    <div className="controls__dice-wrapper">
      {
        diceValues[0] === 0 ? '' :
          <>
            <div className="controls__dice dice1">
              <img src={`./img/dice-${diceValues[0]}.png`} alt={`${diceValues[0]}`} />
            </div>
            <div className="controls__dice dice2">
              <img src={`./img/dice-${diceValues[1]}.png`} alt={`${diceValues[1]}`} />
            </div>
          </>
      }
    </div>
  );
};

export default Dice;
