import React from "react";
import Square from "./Square";

// create a component Board, that takes squares and onClick as props, map over each square and pass a square into Square component along with i. Tip! when working with actual API its better practice to use actual key, not an index
const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
