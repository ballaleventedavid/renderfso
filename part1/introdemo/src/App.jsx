import { useState } from 'react'

const Display = (props) => <div>{props.value}</div>
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}
<button onClick={() => setToValue(0)}>reset</button>

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value = {value} />
      <Button onClick={() => setToValue(1000)} text='thousand'></Button>
      <Button onClick={() => setToValue(0)} text='reset'></Button>
      <Button onClick={() => setToValue(value + 1)} text='increment'></Button>
    </div>
  )
}
export default App