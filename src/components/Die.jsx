function Die({value, isHeld, holdDice}) {
  // style a held die
  const styles = {
    backgroundColor: isHeld ? '#59E391' : '#FFFFFF',
  }

  return (
    <button className='die-face button die-button' style={styles} onClick={holdDice}>
      <span className="die-num">{value}</span>
    </button>
  )
}

export default Die;