import { useEffect, useState } from "react";
import "./App.css";

function GitHubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt="Github user" />
    </div>
  );
}
function App() {
  // Create a container for data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/muziph`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <GitHubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
