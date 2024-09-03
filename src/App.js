import './App.css';

const cities = ["Jozi", "Durban", "Cape Town"];
console.log(cities[0]);

// Destructuring array above and using position to refer to array elements
const [first, second] = ["Jozi", "Durban", "Cape Town"];
console.log(second);
console.log(first);
function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
