import React from "react";

const Increment = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Increment;
