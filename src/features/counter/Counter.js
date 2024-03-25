import React, { useState } from "react";
import {
  increment,
  decrement,
  reset,
  addIncrementAmount,
} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addVallu = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h6>{count}</h6>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addIncrementAmount(addVallu))}>
          Add
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
}
