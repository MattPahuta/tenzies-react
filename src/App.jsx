
import Die from "./components/Die";

function App() {

  return (
    <main className="main">
      {/* Future Header */}
      <h1 className="game-heading">Tenzies</h1>
      <div className='dice-grid'>
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="5" />
        <Die value="3" />
        <Die value="2" />
        <Die value="4" />
      </div>
    </main>
  )
}

export default App;