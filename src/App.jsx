import React from "react";
import Die from "./components/Die";
import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";

function App() {

  // ToDo: move to 'helpers' file
  // ToDo: add 'range' function to a 'utils' file?
  const allNewDice = () => [...new Array(DICE_ARRAY_LENGTH)]
    .map(() => Math.ceil(Math.random() * DIE_SIDE_COUNT));

  const [diceArray, setDiceArray] = React.useState(() => allNewDice())


  return (
    <main className="main">
      {/* Future Header */}
      <h1 className="game-heading">Tenzies</h1>
      <div className='dice-grid'>
        {diceArray.map((dieRoll) => (
          <Die key={Math.random()} value={dieRoll}/>
        ))}
      </div>
    </main>
  )
}

export default App;