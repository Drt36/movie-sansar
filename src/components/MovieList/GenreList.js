import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import GenreGrid from "./GenreGrid";
import "./genre-list.css";
import { UseMoviesByGenre } from "../services/UseMoviesByGenre";

const GenreList = (props) => {
  let genre = props.match.params.genre;
  let limit = 20;

  const { loading, movieDetails, error } = UseMoviesByGenre(genre, limit);

  const renderGenreList = () => {
    if (loading) {
      return <div className="genrelist-loading">Loading...</div>;
    }
    if (error) {
      return <div className="genrelist-error">{error}</div>;
    }

    return (
      <GenreGrid movieDetails={movieDetails} genre={genre.toUpperCase()} />
    );
  };

  return (
    <div>
      <Navbar />
      {renderGenreList()}
      <Footer />
    </div>
  );
};

export default GenreList;
