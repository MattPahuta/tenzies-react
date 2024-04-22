function RollTracker({rollCount}) {
  return (
    <div className="roll-count-container">
      <p>Number of Rolls: <span className="roll-count">{rollCount}</span></p>
    </div>
  )
}

export default RollTracker;