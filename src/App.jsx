import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import { generateNewDie, generateNewDice } from "./game-helpers";
import Confetti from 'react-confetti';

function App() {
  // game state
  const [dice, setDice] = React.useState(() => generateNewDice());
  const [rollCount, setRollCount] = React.useState(1);
  const rollButtonRef = React.useRef(null); // improve accessibility
  const gameWon = dice.every((die) => die.isHeld && die.value === dice[0].value);

  React.useEffect(() => {
    if (gameWon) {
      rollButtonRef.current.focus();
    }
  }, [gameWon]);

  // Restart game
  function restartGame() {
    setDice(generateNewDice());
    setRollCount(1);
  }

  // Roll the dice
  function rollDice() {
    if (!gameWon) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
      }))
      setRollCount((prevRollCount) => prevRollCount + 1)
    } else {
      restartGame();
    }
  }
  // Hold a specific die
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : // flip isHeld for matching die id
        die
    }))
  }

  const diceElements = dice.map(({value, id, isHeld}) => (
    <Die key={id} value={value} isHeld={isHeld} holdDice={() => holdDice(id)} />
  ))

  return (
    <main className="main">
      {gameWon && <Confetti />}
      <Header rollCount={rollCount} gameWon={gameWon} />
      <div className='dice-grid'>
        {diceElements}
      </div>
      <button className="button roll-button" onClick={rollDice} ref={rollButtonRef}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}

export default App;