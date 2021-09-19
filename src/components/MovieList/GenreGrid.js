import React from "react";
import Card from "../Card/Card";
import "./genre-list.css";
const GenreGrid = (props) => {
  let movieDetails = props.movieDetails;
  console.log(movieDetails);
  return (
    <>
      <h3 className="grid-genre">{props.genre}</h3>
      <div className="grid-wrapper">
        {movieDetails.map((currMovie) => {
          return <Card movieDetail={currMovie} />;
        })}
      </div>
    </>
  );
};

export default GenreGrid;
