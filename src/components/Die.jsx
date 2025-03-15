function Die({value, isHeld, holdDice}) {
  // style a held die
  const styles = {
    backgroundColor: isHeld ? '#59E391' : '#FFFFFF',
  }

  return (
    <button 
      className='die-face button die-button' 
      style={styles} 
      onClick={holdDice} 
      aria-pressed={isHeld}
      aria-label={`Die showing ${value}, ${isHeld ? 'held' :'not held'}`} 
    >
      <span className="die-num">{value}</span>
    </button>
  )
}

export default Die;