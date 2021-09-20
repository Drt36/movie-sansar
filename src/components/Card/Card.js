import React, { useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { AiFillEye } from "react-icons/ai";
import "./card.css";
const Card = (props) => {
  const [key, setkeys] = useState(Object.keys(localStorage));
  const movieDetail = props.movieDetail;
  const remove = props.remove;
  const history = useHistory();
  const watchlist = key.includes("l" + movieDetail.id);
  const watched = key.includes("w" + movieDetail.id);

  const handelCardClick = () => {
    history.push(`/moviedetail/${movieDetail.id}`);
  };

  const handelWatchListClick = () => {
    localStorage.setItem("l" + movieDetail.id, JSON.stringify(movieDetail));
    setkeys(Object.keys(localStorage));
  };

  const handelWatchedList = () => {
    localStorage.setItem("w" + movieDetail.id, JSON.stringify(movieDetail));
    if (watchlist == true) {
      localStorage.removeItem("l" + movieDetail.id);
    }
    setkeys(Object.keys(localStorage));
  };

  const handelRemoveWatchedList = () => {
    localStorage.removeItem("l" + movieDetail.id);
    setkeys(Object.keys(localStorage));
  };

  return (
    <div className="card" key={movieDetail.id}>
      <div className="card__click" onClick={() => handelCardClick()}>
        <img
          className="card__img"
          src={movieDetail.medium_cover_image}
          alt="cover image"
        />
        <h3 className="card__title">
          {movieDetail.title_english.slice(0, 25)}
        </h3>
        <p className="card__rating">
          Rating:{movieDetail.rating}
          <BsStarFill />
        </p>
      </div>

      <div className="btn-wrapper">
        {watchlist === true || watched === true ? (
          " "
        ) : (
          <button className="card__btn-watch" onClick={handelWatchListClick}>
            Add to Watchlist
          </button>
        )}

        {watched === false ? (
          <button className="card__btn-watched" onClick={handelWatchedList}>
            Mark as Watched
          </button>
        ) : (
          <p className="card__watched">
            Already Watched <AiFillEye />
          </p>
        )}

        {remove === true ? (
          <button
            className="card__btn-remove"
            onClick={handelRemoveWatchedList}
          >
            Remove
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
