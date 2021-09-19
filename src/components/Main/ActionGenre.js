import React, { useState } from "react";
import Card from "../Card/Card";
import "./action-genre.css";
import { UseMoviesByGenre } from "../services/UseMoviesByGenre";
import { Link } from "react-router-dom";

const ActionGenre = () => {
  let genre = "action";
  let limit = 10;
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
      return <div className="action-loading">Loading...</div>;
    }
    if (error) {
      return <div className="action-error">{error}</div>;
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
    <div className="action-wrapper">
      <h3 className='action-wrapper__title'>Action</h3>
      {renderActionGenre()}

      {movies.prev > 0 ? (
        <a className="action-prev-link" onClick={() => handelPrevBtn()}>
          &#10094;
        </a>
      ) : (
        ""
      )}
      {movies.next < 10 ? (
        <a className="action-next-link" onClick={() => handelNextBtn()}>
          &#10095;
        </a>
      ) : (
        ""
      )}
      <div className='actionlink-wrapper'>
        <Link>See More</Link>
       </div>
    </div>
  );
};

export default ActionGenre;
