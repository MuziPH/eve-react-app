import { useRef } from 'react';
import './App.css';

function App() {
  // useRef retrieves values from the the form, like which color is selected
  // retrives the value of text in the input
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`)
    txtTitle.current.value="";
    hexColor.current.value="";
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type='text' placeholder='color title...' />
      <input ref={hexColor} type='color' />
      <button>ADD</button>
    </form>
  );
}

export default App;
