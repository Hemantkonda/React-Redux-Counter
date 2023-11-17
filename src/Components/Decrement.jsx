import React from "react";

const Decrement = ({ decrement }) => {
  return (
    <div>
      <button disabled={decrement < 0} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
