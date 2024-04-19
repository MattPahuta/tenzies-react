import React from "react";
import Header from "./components/Header";
import Die from "./components/Die";
// import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";

import { generateNewDie, generateNewDice } from "./game-helpers";

import Confetti from 'react-confetti';

function App() {
  // game state
  const [dice, setDice] = React.useState(() => generateNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const winningDice = dice.every((die) => {
      return die.isHeld && die.value === dice[0].value;
    })

    if (winningDice) {
      setTenzies(true);
      console.log('Won!')
    }
  }, [dice])
  
  // Restart game
  function restartGame() {
    setTenzies(false)
    setDice(generateNewDice());
  }
  // Roll the dice
  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
      }))
    } else {
      restartGame();
    }
  }
  // Hold a specific die
  function holdDice(id) {
    // console.log(id)
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : // flip isHeld for matching die id
        die
    }))
  }

  const diceElements = dice.map(({value, id, isHeld}) => (
    <Die key={id} value={value} isHeld={isHeld} holdDice={() => holdDice(id)} />
  ))

  // function confetti() {
  //   const {width, height} = useWindowSize();
  //   return (
  //     <Confetti
  //       width={width}
  //       height={height}
  //     />
  //   )
  // }

  return (
    <main className="main">
      {tenzies && <Confetti />}
      <Header />
      <div className='dice-grid'>
        {diceElements}
      </div>
      <button className="button roll-button" onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}

export default App;