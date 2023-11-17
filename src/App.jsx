// import { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Store";
import "./App.css";
import Increment from "./Components/Increment";
import Decrement from "./Components/Decrement";
import Reset from "./Components/Reset";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch(); // Add this line to get the dispatch function

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };
  
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className="d-flex">
      <Increment increment={handleIncrement} />
      <Decrement decrement={handleDecrement} />
      <Reset reset={handleReset} />
      </div>
    </div>
  );
}

export default App;
