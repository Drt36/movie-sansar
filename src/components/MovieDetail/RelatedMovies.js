import React from "react";
import Card from "../Card/Card";
import "./movie-detail.css";
import { useMoviesSuggestions } from "../services/useMoviesSuggestions";

const RelatedMovies = (props) => {
  const id = props.id;
  const { loading, movies, error } = useMoviesSuggestions(id);
  const renderRelatedMovies = () => {
    if (loading) {
      return <div className="related-movie-loading">Loading...</div>;
    }
    if (error) {
      return <div className="related-movie-error">{error}</div>;
    }

    return (
      <div className="related-movie-wrapper">
        <h3>Related Movies</h3>
        <div className="related-movie">
          {movies.map((currMovie, index) => {
            return <Card movieDetail={currMovie} key={index} />;
          })}
        </div>
      </div>
    );
  };
  return <div>{renderRelatedMovies()}</div>;
};

export default RelatedMovies;
