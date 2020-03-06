import React from "react";
import Movie from "./movie";

const Movies = props => {
  return (
    <div>
      {props.movies.map(movie => (
        <Movie
          img={movie.img}
          _id={movie.id}
          title={movie.title}
          genre={movie.genre}
          numberInStock={movie.numberInStock}
          dailyRentalRate={movie.dailyRentalRate}
        />
      ))}
    </div>
  );
};

export default Movies;
