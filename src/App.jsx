import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";
import { generateNewDie, generateNewDice } from "./game-helpers";
import Confetti from 'react-confetti';

function App() {
  // game state
  const [dice, setDice] = React.useState(() => generateNewDice());
  // Add a variable to keep track of whether the user has won the game
  // if all dice are held and have the same value, the user has won
  // ToDo: replace 'tenzies' with 'gameWon'
  const gameWon = dice.every((die) => die.isHeld && die.value === dice[0].value);
  const [rollCount, setRollCount] = React.useState(1);


  // const [tenzies, setTenzies] = React.useState(false);

  // React.useEffect(() => {
  //   const winningDice = dice.every((die) => {
  //     return die.isHeld && die.value === dice[0].value;
  //   })

  //   if (winningDice) {
  //     setTenzies(true);
  //   }
  // }, [dice])
  
  // Restart game
  function restartGame() {
    // setTenzies(false)
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
      <button className="button roll-button" onClick={rollDice}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}

export default App;