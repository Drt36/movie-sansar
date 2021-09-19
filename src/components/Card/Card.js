import React from "react";
import { BsStarFill } from "react-icons/bs";
import "./card.css";
const Card = (props) => {
  let movieDetail = props.movieDetail;
  return (
    <div className="card">
      <img
        className="card__img"
        src={movieDetail.medium_cover_image}
        alt="cover image"
      />
      <h3 className="card__title">{movieDetail.title_english.slice(0,25)}</h3>
      <p className="card__rating">
        Rating:{movieDetail.rating}
        <BsStarFill />
      </p>
      <div className="btn-wrapper">
        <button className="card__btn-watch">+Watchlist</button>
        <button className="card__btn-watched">watched</button>
      </div>
    </div>
  );
};

export default Card;
