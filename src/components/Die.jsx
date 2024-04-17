
function Die({value, isHeld, holdDice}) {
  // isHeld ? 'die-face button die-button held-die' : 'die-face button die-button'
  const styles = {
    backgroundColor: isHeld ? '#59E391' : '#FFFFFF',
  }

  return (
    <button className='die-face button die-button held-die' style={styles} onClick={holdDice}>
      <span className="die-num">{value}</span>
    </button>
  )
}

export default Die;