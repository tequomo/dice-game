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
              <img src={`./img/dice-${diceValues[0]}.png`} alt="" />
            </div>
            <div className="controls__dice dice2">
              <img src={`./img/dice-${diceValues[1]}.png`} alt="" />
            </div>
          </>
      }
    </div>
  );
};

export default Dice;
