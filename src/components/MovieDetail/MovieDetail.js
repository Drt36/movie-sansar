import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useMovieDetail } from "../services/useMovieDetail";
import Movie from "./Movie";

const MovieDetail = (props) => {
  const movieId = props.match.params.movieId;
  const { movie, loading, error, torrent, description } =
    useMovieDetail(movieId);

  const renderMovieDetail = () => {
    if (loading) {
      return <div className="movie-detail-loading">Loading...</div>;
    }
    if (error) {
      return <div className="movie-detail-error">{error}</div>;
    }

    return <Movie movie={movie} torrent={torrent} description={description} />;
  };

  return (
    <div>
      <Navbar />
      {renderMovieDetail()}
      <Footer />
    </div>
  );
};

export default MovieDetail;
