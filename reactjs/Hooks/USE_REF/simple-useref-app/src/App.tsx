import { useRef } from 'react'
import './App.css'

function App() {

  const ref = useRef(0);

  function handleClick(){
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + '  times!')
  }

  return (
    <>
    <div>
      <h1>useRef() Hook</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
    </>
  )
}

export default App
