// import React, { useState } from "react";
// import { calculateWinner } from "../helper";
// import Board from "./Board";

// //initial states:
// //for history - array of 9 squares filled with null
// //for steps - 0
// //for next X step - true (X starts)
// //winner will call back function and check history at every step number if there's a winner
// //declare xO so if state X is true then display X, else O

// const Game = () => {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [stepNumber, setStepNumber] = useState(0);
//   const [xIsNext, setXisNext] = useState(true);
//   const winner = calculateWinner(history[stepNumber]);
//   const xO = xIsNext ? "X" : "O";

//   //declare handleClick, when clicked we pass index up
//   //declare historyPount to check where we are (from the beginning to that point )
//   //declare current to show stepNumber
//   //declare squares to show current(a copy of our current history)
//   const handleClick = (i) => {
//     const historyPoint = history.slice(0, stepNumber + 1);
//     const current = historyPoint[stepNumber];
//     const squares = [...current];
//     // return if won or occupied
//     if (winner || squares[i]) return;
//     // select square
//     squares[i] = xO;
//     setHistory([...historyPoint, squares]);
//     setStepNumber(historyPoint.length);
//     setXisNext(!xIsNext);
//   };
//   //if divisible by 2 = O , else - X
//   const jumpTo = (step) => {
//     setStepNumber(step);
//     setXisNext(step % 2 === 0);
//   };
//   //render history of moves
//   //return li key={move} - try not to do this in actual application. Passing destination to button text
//   const renderWinners = () =>
//     history.map((_step, move) => {
//       const destination = move ? `Go to move #${move}` : "Go to Start";
//       return (
//         <li key={move}>
//           <button onClick={() => jumpTo(move)}>{destination}</button>
//         </li>
//       );
//     });

//   return (
//     <>
//       <h1>React Tic Tac Toe - With Hooks</h1>
//       <Board squares={history[stepNumber]} onClick={handleClick} />
//       <div className="info-wrapper">
//         <div>
//           <h3>Winners:</h3>
//           {renderWinners()}
//         </div>
//         <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
//       </div>
//     </>
//   );
// };

// export default Game;
