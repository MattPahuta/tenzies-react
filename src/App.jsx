import React from "react";
import Die from "./components/Die";
import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";
import Confetti from 'react-confetti';

function App() {
  // ToDo: move to 'helpers' file

    // move this to utils file
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * DIE_SIDE_COUNT),
      isHeld: false,
      id: Math.random()
    }
  }

  // const generateNewDice = () => [...new Array(DICE_ARRAY_LENGTH)]
  //   .map(() => {
  //     return {
  //       value: Math.ceil(Math.random() * DIE_SIDE_COUNT),
  //       isHeld: false,
  //       id: Math.random()
  //     }
  // });

  const generateNewDice = () => [...new Array(DICE_ARRAY_LENGTH)]
    .map(() => generateNewDie());

  const [dice, setDice] = React.useState(() => generateNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    // console.log('dice state changed')
    // const allHeld = dice.every(die => die.isHeld);
    // const allEqualVal = dice.every(die => die.value === dice[0].value);
    const winningDice = dice.every((die) => {
      return die.isHeld && die.value === dice[0].value;
    })

    if (winningDice) {
      setTenzies(true);
      console.log('Won!')
  }
    // if (allHeld && allEqualVal) {
    //     setTenzies(true);
    //     console.log('Won!')
    // }
  }, [dice])
  
  // Restart game
  function restartGame() {
    setTenzies(false)
    setDice(generateNewDice());
  }

  function rollDice() {
    // setDiceArray(generateNewDice())
    // if (tenzies) {
    //   restartGame();
    //   return;
    // }

    
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

  function holdDice(id) {
    // console.log(id)
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : // flip isHeld for matching die id
        die
    }))
  }

  // isHeld ? 'die-face button die-button held-die' : 'die-face button die-button'
  const diceElements = dice.map(({value, id, isHeld}) => (
    <Die key={id} value={value} isHeld={isHeld} holdDice={() => holdDice(id)} />
  ))

  return (
    <main className="main">
      {/* Future Header */}
      {/* Render confetti within game container? And/or set width/height */}
      {tenzies && <Confetti />}
      <h1 className="game-heading">Tenzies</h1>
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