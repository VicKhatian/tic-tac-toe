import React from "react";

//functional component, takes value and onClick as props, returns a button with value X or O. Style for square is style, if there's a value - displays the value

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
