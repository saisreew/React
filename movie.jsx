import React from "react";

const Movie = props => {
  return (
    <div>
      <div className="row shadow mb-3 mt-3">
        <div className="col-3 pl-0">
          <img src={props.img} height="150px" />
        </div>
        <div className="col-9">
          <h4 className="text-primary">Title:{props.title}</h4>
          <p>
            <b>Genre:</b>
            {props.genre}
          </p>
          <p>
            <b>numberInStock:</b>
            {props.numberInStock}
          </p>
          <p>
            <b>dailyRentalRate:</b>
            {props.dailyRentalRate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
