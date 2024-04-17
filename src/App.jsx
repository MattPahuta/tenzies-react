import React from "react";
import Die from "./components/Die";
import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";

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

  const [diceArray, setDiceArray] = React.useState(() => generateNewDice());
  // console.log(diceArray)
  


  function rollDice() {
    // setDiceArray(generateNewDice())

    setDiceArray(prevDice => prevDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
  }

  function holdDice(id) {
    console.log(id)
    setDiceArray(prevDice => prevDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : // flip isHeld for matching die id
        die
    }))
  }

  // isHeld ? 'die-face button die-button held-die' : 'die-face button die-button'
  const diceElements = diceArray.map(({value, id, isHeld}) => (
    <Die key={id} value={value} isHeld={isHeld} holdDice={() => holdDice(id)} />
  ))

  return (
    <main className="main">
      {/* Future Header */}
      <h1 className="game-heading">Tenzies</h1>
      <div className='dice-grid'>
        {diceElements}
      </div>
      <button className="button roll-button" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;