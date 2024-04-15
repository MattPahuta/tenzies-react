import React from "react";
import Die from "./components/Die";
import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";

function App() {
  // ToDo: move to 'helpers' file
  // ToDo: add 'range' function to a 'utils' file?

  const generateNewDice = () => [...new Array(DICE_ARRAY_LENGTH)]
    .map(() => {
      return {
        value: Math.ceil(Math.random() * DIE_SIDE_COUNT),
        isHeld: false,
        id: Math.random()
      }
    });

  const [diceArray, setDiceArray] = React.useState(() => generateNewDice());
  console.log(diceArray)
  
  // move this to inline onClick event for button?
  function rollDice() {
    setDiceArray(() => generateNewDice())
  }

  return (
    <main className="main">
      {/* Future Header */}
      <h1 className="game-heading">Tenzies</h1>
      <div className='dice-grid'>
        {diceArray.map(({value, id}) => (
          <Die key={id} value={value} />
        ))}
      </div>
      <button className="button roll-button" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;