import {useCallback, useState} from "react";
import './App.css';
import IncrementButton from "./Components/Functional/IncrementButton";


function App(props) {
  const [counter, setCounter]=useState(0)
  const handleIncrement=useCallback(()=>setCounter(prevState=>prevState+1), [])

  // 1
/** Works like componentDidMount
  useEffect(()=>{

  },[])*/


// 2
/** Works like componentWillUnmount
useEffect(()=>{

  return ()=>{
    // clean up
  }
}, [])
*/

// 3
/**  useEffect(() => {
    //Runs on every render
  });*/

// 4
/**
 * useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
 */


/** It will make an infinite re-rendering
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setState(json))
}, [state])
 */


  return (
      <div className="App">
        <div>counter: {counter}</div>
        <IncrementButton handleIncrement={handleIncrement}/>
      </div>
  );
}

export default App;