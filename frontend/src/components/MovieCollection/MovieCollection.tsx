import React, { useEffect, useState } from 'react';
import movieData from '../../assets/MovieData.json';
import './MovieCollection.css';
import { Movie } from '../../types/movie';

const MovieCollection: React.FC = () => {

  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const res = await fetch('https://localhost:4000/movies')
    const temp = await res.json();
    setMovieData(temp);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section style={{ paddingTop: '40px' }}>
      <h1>Movie Collection</h1>
      <section className="movieGrid">
        {movieData.map((movie, index) => (
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