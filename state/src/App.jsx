import './App.css'
import { useState } from 'react'
import Display from './Display'

function App() {
  const name = 'marco'
  // convention for naming : [value, setValue]
  const [count, setCount] = useState(0)

  const [liked, setLiked] = useState(false)

  function handleClick() {
    // console.log('click')
    // increment the state of count
    // don't mutate state directly
    // count = count + 1 ❌
    // we want to use the set function to mutate state
    setCount(count + 1)
    // if you use the current state to calculate the new state it is better
    // to pass a callback like this
    // setCount(currentState => currentState + 1)
  }

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {count} */}
        <Display number={count} />
        <button onClick={handleClick}>click me 🙂</button>
        <h1>{liked ? 'this component is liked' : 'this component is not liked'}</h1>
        <button onClick={handleLike}>Like / Unlike</button>
      </header>
    </div>
  )
}

export default App
