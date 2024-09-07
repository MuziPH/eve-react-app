import { useState } from "react";
import "./App.css";

// Custom hook encapsulating common functionality of taking an initial value and updating it to an event target value
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: event => setValue(event.target.value) },
    () => setValue(initialValue)
  ];
}
function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
