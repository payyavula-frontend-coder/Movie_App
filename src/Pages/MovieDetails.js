import React, { useEffect, useState } from "react";

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`
    );
    const data = await res.json();
    setMovie(data);
  };

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>

      <img
        width="300"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>⭐ Rating: {movie.vote_average}</p>
      <p>📅 Release: {movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetails;