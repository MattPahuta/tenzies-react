
import Die from './Die';

function Game() {

  return (
    <>
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
    </>
  )
}

export default Game;