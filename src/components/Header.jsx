import RollTracker from "./RollTracker";

function Header({rollCount}) {
  return (
    <header className="header">
      <h1 className="game-heading">Tenzies</h1>
      <p className="game-rules">
        Roll until all dice are the same. Click a die to hold at its value. Keep rolling until all dice show the same number.
      </p>
      <RollTracker rollCount={rollCount}/>
    </header>
  )
}

export default Header;