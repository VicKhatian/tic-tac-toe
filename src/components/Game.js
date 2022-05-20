import React from "react";
import Cell from "./Cell";

function Game() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Game;
