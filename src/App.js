import { useState } from 'react';
import './App.css';

function App() {
  // useState takes two parameters, a value for initial state and a function to update the state
  // We used destructuring to capture the initial value emotion and the function to update emotion state, setEmotion
  const [emotion, setEmotion] = useState("what");
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")} >Sad</button>
      <button onClick={() => setEmotion("excited")} >Excited</button>
    </div>
  );
}

export default App;
