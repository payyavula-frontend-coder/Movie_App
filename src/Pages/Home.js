import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import SearchBar from "../Components/SearchBar";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("");
  }, []);

  const fetchMovies = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=07f4e17f57c7375c648de97d7eed7566&query=${query}`,
    );
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSearch = (value) => {
    setSearch(value);
    fetchMovies(value);
  };

  return (
    <div>
      <h2>Search Movies 🎬</h2>

      <SearchBar
        setSearch={setSearch}
        onSearch={(value) => fetchMovies(search)}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
