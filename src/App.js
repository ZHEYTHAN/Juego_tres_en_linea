import React from "react";
import { useState } from "react";

function Square() {
  // Valor en null como valor inicial
  const [value, setValue] = useState(null);

  // Funcion para cambiar a X al dar click
  function handleClick() {
    setValue("X");
  }
  return (
    // Retorna el boton y aplica la X al clickear
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
}
