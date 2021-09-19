import React, { useState } from "react";
import Card from "../Card/Card";
import "./genre.css";
import { UseMoviesByGenre } from "../services/UseMoviesByGenre";
import { Link } from "react-router-dom";

const Genre = (props) => {
  let genre =props.movies.genre;
  let limit =props.movies.limit;
  const { loading, movieDetails, error } = UseMoviesByGenre(genre, limit);
  const [movies, setMovies] = useState({ prev: 0, next: 4 });

  const handelPrevBtn = () => {
    if (movies.prev > 0) {
      movies.prev -= 1;
      movies.next -= 1;
    }
    setMovies({ ...movies });
  };

  const handelNextBtn = () => {
    if (movies.next < 10) {
      movies.prev += 1;
      movies.next += 1;
    }
    setMovies({ ...movies });
  };

  const renderActionGenre = () => {
    if (loading) {
      return <div className="genre-loading">Loading...</div>;
    }
    if (error) {
      return <div className="genre-error">{error}</div>;
    }

    return (
      <>
        {movieDetails
          .slice(movies.prev, movies.next)
          .map((currMovie, index) => {
            return <Card movieDetail={currMovie} />;
          })}
      </>
    );
  };
  return (
    <div className="genre-wrapper">
      <h3 className='genre-wrapper__title'>{genre}</h3>
      {renderActionGenre()}

      {movies.prev > 0 ? (
        <a className="genre-prev-link" onClick={() => handelPrevBtn()}>
          &#10094;
        </a>
      ) : (
        ""
      )}
      {movies.next < 10 ? (
        <a className="genre-next-link" onClick={() => handelNextBtn()}>
          &#10095;
        </a>
      ) : (
        ""
      )}
      <div className='genrelink-wrapper'>
        <Link>See More</Link>
       </div>
    </div>
  );
};

export default Genre;
