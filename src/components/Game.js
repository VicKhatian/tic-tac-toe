import "./Game.css";
import React, { useState } from "react";

//state of turn by default is X to start
//state of cell to track which one was clicked
const Game = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  //function loops through squares array and checks
  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          //if matching pattern - you're a winner
          setWinner(squares[pattern[0]]); //whatever letter is present in a square
        }
      });
    }
  };

  //function handleClick: 1.changes turns X/O, 2.track moves in cells 3.checks if cell is already filled
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked"); //avoid double clicking
      return;
    }

    let squares = [...cells]; //copying array of cells

    //if turn X is clicked set state of turn to O
    if (turn === "x") {
      squares[num] = "x"; //square at position "num" is populated with data
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }

    checkForWinner(squares); //check each time when squares change
    setCells(squares); //updating the state of cells with the choice made
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };
  //each cell has a num, pass the prop up, so {}distrucutre it
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        Turn: {turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
      {winner && (
        <>
          <p>{winner} is the winner!</p>
        </>
      )}
    </div>
  );
};

export default Game;
