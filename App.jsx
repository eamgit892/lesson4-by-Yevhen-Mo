import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { RandomColorize } from './components/RandomColorize.jsx'

function App() {
  // task 1 state & methods 
  const [arr, setArr] = useState([1, 2, 3, 4]) 
  
  // return random from 0 to 1000
  const random = (n) => {
    console.log("random is clicked!")
    return Math.floor(Math.random() * n + 1);
  }
  // pushes this random to the array in the state 
  const pushRandom = () => {
    setArr([...arr, random(1000)]);
  }

  // task 2 state & methods ---------------------------------------
  const [randomVar, changeRandomVar] = useState(0);
  const writeRandomToState = () => changeRandomVar(random(100));

  // task 3 changeStateCallback ------------------------------------
  // to enable parent re-render after child component is modified  -
  // ---------------------------------------------------------------
  const [state, stateChanger] = useState(0);

  const appStateChange = () => {
    console.log("App component should change now ...")
    stateChanger(() => 1 - state); // invert state 
  }
  
  return (
    <>
      {/* Task 1  */}
      <h2>Now goes the task 1: </h2>
      <p>Press following button to add random number to the array</p>
      <button onClick={pushRandom}>Click me #1!</button>
      <h3>{arr.join(' ')}</h3>
      <hr/>
      
      {/* Task 2  */}
      <h2>Now goes the task 2: </h2>
      <p>Створити власний state який буде буде виводити випадкове число від 0 до 100 при натисканні на 
      кнопку.</p>
      <button onClick={writeRandomToState}>Click me #2!</button>
      <h3>{randomVar}</h3>
      <hr />

      {/* Task 3 is a component */}
      <RandomColorize onStateChange={appStateChange}/>
      <hr />
    </>
  )
}

export default App
