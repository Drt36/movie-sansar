import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useHistory } from "react-router";
import "./card.css";
const Card = (props) => {
  const movieDetail = props.movieDetail;
  const history=useHistory();

  const handelCardClick=()=>{
    history.push(`/moviedetail/${movieDetail.id}`);
  }
  return (
    <div className="card" onClick={()=>handelCardClick()} key={movieDetail.id}>
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
        <button className="card__btn-watched">+Watched</button>
      </div>
    </div>
  );
};

export default Card;
