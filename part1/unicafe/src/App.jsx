import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatP = (props) =>  <><td>{props.text}</td><td>{props.stat}</td></>

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <div>
        <table>
          <tbody>
            <tr><StatP text = 'good' stat = {props.good} /></tr>
            <tr><StatP text = 'neutral' stat = {props.neutral} /></tr>
            <tr><StatP text = 'bad' stat = {props.bad} /></tr>
            <tr><StatP text = 'all' stat = {props.all} /></tr>
            <tr><StatP text = 'avg' stat = {props.avg} /></tr>
            <tr><StatP text = 'positive' stat = {props.pos} /></tr>
          </tbody>
        </table>
        
      </div>
    )
  }
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const all = good + neutral + bad
const avg = (good - bad) / all
const pos = (good / all) * 100 + ' %'

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGood} text = 'good' />
      <Button handleClick = {handleNeutral} text = 'neutral' />
      <Button handleClick = {handleBad} text = 'bad' />
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} avg = {avg} pos = {pos} />
      

    </div>
  )
}

export default App