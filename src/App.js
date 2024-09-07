import { useEffect, useState } from "react";
import "./App.css";

function GitHubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt="Github user"/>
    </div>
  );
}
function App() {
  // Create a container for data
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/muziph`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data)
    return (
      <GitHubUser
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>Data</h1>;
}

export default App;
