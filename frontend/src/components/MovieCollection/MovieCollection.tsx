import React from 'react';
import movieData from '../../assets/MovieData.json';
import './MovieCollection.css';

const MovieCollection: React.FC = () => {
  return (
    <section style={{ paddingTop: '40px' }}>
      <h1>Movie Collection</h1>
      <section className="movieGrid">
          {movieData.MovieData.map((movie, index) => (
            <div className="movieCard" key={index}>
              <h2>{movie.Title}</h2>
              <p>Category: {movie.Category}</p>
              <p>Director: {movie.Director}</p>
              <p>Rating: {movie.Rating}</p>
              <p>Edited: {movie.Edited}</p>
            </div>
          ))}
      </section>
    </section>
  );
};

export default MovieCollection;