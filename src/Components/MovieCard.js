import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img
        width="200"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}
export default MovieCard;
