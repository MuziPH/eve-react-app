import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
// useEffect takes two arguments, the function that will be called when we want the effect to happen
// second argument is the field to listen for any changes that will trigger the effect like changes in emotion below
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  },[emotion]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")} >Sad</button>
      <button onClick={() => setEmotion("excited")} >Excited</button>
    </div>
  );
}

export default App;
