import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  },[emotion, secondary]); // Listen to changes in the dependency array
  
  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")} >Sad</button>
      <button onClick={() => setEmotion("excited")} >Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
