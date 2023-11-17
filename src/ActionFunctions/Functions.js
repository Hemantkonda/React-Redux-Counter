// ActionFunctions/Functions.js
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Store";

export const handleIncrement = () => {
  const dispatch = useDispatch();
  dispatch(increment());
};

export const handleDecrement = () => {
  const dispatch = useDispatch();
  dispatch(decrement());
};

export const handleReset = () => {
  const dispatch = useDispatch();
  dispatch(reset());
};
