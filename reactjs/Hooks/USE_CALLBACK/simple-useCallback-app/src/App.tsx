import { useCallback, useState } from 'react'
import './App.css'
import Demo from './Components/Demo';

function App() {

  const[count, setCount] = useState(0);

  console.time('useCallbackFunction')
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  console.timeEnd('useCallbackFunction')


  // ParentComponent renders a count state and passes an increment callback to ChildComponent.
  // increment is defined using useCallback to memoize the function, ensuring that it doesn't change on re-renders unless its dependencies change.
  // ChildComponent receives the increment callback as a prop and uses it to update the count state when the button is clicked.


  return (
    <>
      <div className='App'>
        <h1>Simple useCallback() app</h1>
        <h3>Count : {count}</h3>
        {/* Render the ChildComponent and pass the increment callback */}
        <Demo increment={increment}/>
      </div>
    </>
  )
}

export default App
