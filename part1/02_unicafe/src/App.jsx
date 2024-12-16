import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [averageClicks, setAverage] = useState(0)
  const [positiveClicks, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const totalClicks = neutral + bad + updatedGood

    setAll(totalClicks)
    const average = ((neutral * 0) + (bad * -1) + updatedGood)/totalClicks
    setAverage(average)

    const positive = updatedGood / totalClicks
    setPositive(positive * 100)

  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const totalClicks = updatedNeutral + bad + good

    setAll(totalClicks)
    const average = ((updatedNeutral * 0) + (bad * -1) + good)/totalClicks
    setAverage(average)

    const positive = good / totalClicks
    setPositive(positive * 100)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const totalClicks = neutral + updatedBad + good

    setAll(totalClicks)
    const average = ((neutral * 0) + (updatedBad * -1) + good)/totalClicks
    setAverage(average)

    const positive = good / totalClicks
    setPositive(positive * 100)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>
        Good
      </button>
      <button onClick={handleNeutral}>
        Neutral
      </button>
      <button onClick={handleBad}>
        Bad
      </button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks}</p>
      <p>average {averageClicks}</p>
      <p>positive {positiveClicks}%</p>
    </div>
  )
}

export default App
