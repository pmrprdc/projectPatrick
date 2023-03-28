import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [age, setAge] = useState("")
  const changeHandler = (e) => {
    setAge(e.target.value)
    console.log(age)
  }
  const submitHandler =(e) => {
    e.preventDefault();
    const ageInDays = parseInt(age)*365;
    const displayString = `You are ${ageInDays} days old or maybe more idk`
    setAge(displayString)
  }

    const restartHandler = (e) => {
      e.preventDefault();
      setAge("")
    }
  return (
    <div className="App">
      <h1>How old are you?</h1>
      <h1>{age}</h1>
      <form>

        <input onChange={changeHandler} value={age} type="text"></input>
        <button onClick={submitHandler}>Submit</button>
      </form>
      <button onClick={restartHandler}>Restart</button>
    </div>
  )
}

export default App
