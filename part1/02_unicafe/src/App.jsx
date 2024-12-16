import { useState } from 'react'

const Statistics = (props) => {
  return <>
    <h1>Statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.allClicks}</p>
    <p>average {props.averageClicks}</p>
    <p>positive {props.positiveClicks}%</p>
  </>
}

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

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        averageClicks={averageClicks}
        positiveClicks={positiveClicks}
      />

    </div>
  )
}

export default App
