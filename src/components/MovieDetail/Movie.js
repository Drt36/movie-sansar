import React, { useState } from "react";
import "./movie-detail.css";
import { BsStarFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import RelatedMovies from "./RelatedMovies";
const Movie = (props) => {
  const movie = props.movie;
  const source = `https://www.youtube.com/embed/${movie.yt_trailer_code}`;

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
            <span className="highlight">Description:</span>{" "}
            {movie.description_full}
          </p>
          <div className="movie-detail__btn-wrapper">
            <button className="movie-detail__btn-watch">+Watchlist</button>
            <button className="movie-detail__btn-watched">
              Mark as watched
            </button>
          </div>
        </div>
        <div className="movie-video">
          <h3 className="movie-video__title">Watch Trailer Here:</h3>
          <iframe src={source}></iframe>
        </div>
      </div>
      <a
        target="_blank"
        href={`https://www.youtube.com/watch?v=nYRnYH92oZc&ab_channel=RawbinnShrestha`}
      >
        <div className="movie-download">
          <p className="movie-download__text">
            <FaCloudDownloadAlt /> Download
          </p>
          <p className="movie-download__quality">Quality: </p>
          <p className="movie-download__size">Size: </p>
        </div>
      </a>

      <RelatedMovies id={movie.id} key={movie.id} />
    </div>
  );
};

export default Movie;
