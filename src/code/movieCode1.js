const movieCode1 =
`import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_URL, LANGUAGE } from "../globals/globals";

const [movies, setMovies] = useState(false);
// set initial filter as Popular, then change state by user's choice
const [filter, setFilter] = useState("popular");

useEffect(() => {
  const fetchMovies = async () => {
    const res = await fetch(
      {BASE_URL}{filter}?api_key={API_KEY}{LANGUAGE}
    );
    let data = await res.json();

    setMovies(data);
  };
  fetchMovies();
}, [filter]);
`

export default movieCode1
