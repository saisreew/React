import React from "react";
import Counter from "./counter";
const Counters = props => {
  return (
    <div>
      <button
        className="btn btn-info ml-3"
        onClick={() => props.handleReset(props.id)}
      >
        reset
      </button>
      {props.counters.map(counter => (
        <Counter
          id={counter.id}
          value={counter.value}
          handleIncr={props.handleIncr}
          handleDecr={props.handleDecr}
          handleRemove={props.handleRemove}
          handleReset={props.handleReset}
        />
      ))}
    </div>
  );
};

export default Counters;
