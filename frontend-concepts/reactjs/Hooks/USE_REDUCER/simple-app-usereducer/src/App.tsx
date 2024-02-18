import './App.css'
import { useReducer } from 'react'

function reducer(state, action){

  // if you are declaring just one action type, then you can use if else 
  /*
  if(action.type === 'increment_age'){
    return{
      age : state.age + 1
    }
  }
  
  else{
    throw Error(`Invalid action ${action.type}`)
  }
  */

  switch (action.type) {
    case "increment_age":
      return {
        ...state, // Spread the existing state to avoid losing other properties
        age: state.age + 1
      }

    case "change_name":
      return{
        ...state, // Spread the existing state to avoid losing other properties
        name: action.newName
      }

    default:
      return state;
  }

}

function App() {

  const [state, dispatch] = useReducer(reducer, {age: 0});

  console.log(state)

  return (
    <>
      <div>
        <input type="text" value={state.name} placeholder='Input Name' onChange={(e) => {
          dispatch({
            type: 'change_name',
            newName: e.target.value 
          })
        }}/>
        <button onClick={() => {
          dispatch({
            type: 'increment_age'
          })
        }}>
          Increment age</button>
        <h1>Happy Birthday {state.name}🥳🎉 <br/> now you are {state.age} years old !</h1>
      </div>
    </>
  )
}

export default App
