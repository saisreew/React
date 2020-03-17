import React from "react";

const Counter = props => {
  return (
    <div>
      <button
        className="btn btn-secondary ml-2"
        onClick={() => props.handleDecr(props.id)}
      >
        Decr
      </button>
      <span className="badge badge-primary  ml-2">{props.value}</span>
      <button
        className="btn btn-warning  ml-2"
        onClick={() => props.handleIncr(props.id)}
      >
        Incr
      </button>
      <button
        className="btn btn-danger ml-2"
        onClick={() => props.handleRemove(props.id)}
      >
        remove
      </button>
    </div>
  );
};

export default Counter;
