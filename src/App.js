import { useReducer } from 'react';
import './App.css';

function App() {
  // useReducer takes a function to update and second argument i sthe value to update
  const [checked, setChecked] = useReducer(checked => !checked, false);
  return (
    <div className="App">
      <input
        type='checkbox'
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
