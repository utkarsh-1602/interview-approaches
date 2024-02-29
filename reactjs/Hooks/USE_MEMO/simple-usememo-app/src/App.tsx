
import { useMemo, useState } from 'react';
import './App.css'

function App() {

  const [number, setNumber] = useState(0);

  // Using useMemo
  const squaredNum = useMemo(() => {
      return squareNum(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
      setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
      setCounter(counter + 1);
  };
  return (
      <div className="App">
          <h1>Welcome to (Square your Number)</h1>
          <input
              type="number"
              placeholder="Enter a number"
              value={number}
              onChange={onChangeHandler}>
          </input>

          <div>OUTPUT: {squaredNum}</div>
          <button onClick={counterHander}>
              Click 
          </button>
          <div>Counter : {counter}</div>
      </div>
  );
}

// Function to square the value
function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default App


// Now in the above example, we have used the user memo hook, here the function that returns the value i.e squareNum is passed inside the useMemo and inside the array dependencies, we have used the number as the squareNum will run only when the number changes. If we increase the counter and the number remains the same in the input field the squareNum doesn’t run again
// Now we can see in the console that the squareNum is running only when there is a change in the input box and not when the button of the increment counter is clicked.

// Note: Memorization is never free, we are trading space for time. 

