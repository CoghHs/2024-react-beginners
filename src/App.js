import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
