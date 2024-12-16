import { useState } from 'react'

const Statistics = ({good, neutral, bad, allClicks, averageClicks, positiveClicks}) => {
  if (allClicks === 0) {
    return <>
      <h1>Statistics</h1>
      <div>No feedback given</div>
      </>
  }  
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={allClicks} />
          <StatisticLine text="average" value ={averageClicks} />
          <StatisticLine text="positive" value ={positiveClicks} text2="%"/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => { 
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}{props.text2}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
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
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>

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
