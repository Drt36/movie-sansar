import React, { useState } from "react";
import "./movie-detail.css";
import { BsStarFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import RelatedMovies from "./RelatedMovies";
const Movie = (props) => {
  const movie = props.movie;
  const torrent = props.torrent;
  const description = props.description;
  const source = `https://www.youtube.com/embed/${movie.yt_trailer_code}`;
  const [key, setkeys] = useState(Object.keys(localStorage));
  const watchlist = key.includes("l" + movie.id);
  const watched = key.includes("w" + movie.id);

  const handelWatchListClick = () => {
    localStorage.setItem("l" + movie.id, JSON.stringify(movie));
    setkeys(Object.keys(localStorage));
  };

  const handelWatchedList = () => {
    localStorage.setItem("w" + movie.id, JSON.stringify(movie));
    if (watchlist == true) {
      localStorage.removeItem("l" + movie.id);
    }
    setkeys(Object.keys(localStorage));
  };
  return (
    <div className="movie-detail-wrapper">
      <div className="top-wrapper">
        <div className="movie-detail">
          <h3 className="movie-name">Movie Name: {movie.title_english}</h3>
          <p className="movie-rating">
            <span className="highlight">Rating:</span> {movie.rating}{" "}
            <BsStarFill />
          </p>
          <p className="movie-duration">
            <span className="highlight">Duration:</span> {movie.runtime} Minutes
          </p>
          <p className="movie-genre">
            <span className="highlight">Genre:</span>:{movie.genres}
          </p>
          <p className="movie-desc">
            <span className="highlight">Description:</span>
            {description}
          </p>

          <div className="movie-detail__btn-wrapper">
            {watchlist === true || watched === true ? (
              " "
            ) : (
              <button
                className="movie-detail__btn-watch"
                onClick={handelWatchListClick}
              >
                Add to Watchlist
              </button>
            )}
            {watched === false ? (
              <button
                className="movie-detail__btn-watched"
                onClick={handelWatchedList}
              >
                Mark as watched
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="movie-video">
          <h3 className="movie-video__title">Watch Trailer Here:</h3>
          <iframe src={source}></iframe>
        </div>
      </div>

      <div className="movie-download">
        <a target="_blank" href={torrent.url}>
          <p className="movie-download__text">
            <FaCloudDownloadAlt /> Download
          </p>
          <p className="movie-download__quality">Quality: {torrent.quality} </p>
          <p className="movie-download__size">Size: {torrent.size}</p>
        </a>
      </div>

      <RelatedMovies id={movie.id} key={movie.id} />
    </div>
  );
};

export default Movie;
