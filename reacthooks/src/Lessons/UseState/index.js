import React, { useState } from 'react';

function UseState() {
  // array com 2 propriedades
  // [0] => variavel
  // [1] => funcao que define o valor da variavel
  // const teste = useState("");
  // desintegração do array
  //    [0]     , [1] 
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((prevState) => prevState + 1)
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1)
  }

  return (
    <div>
      <h1>useState</h1>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default UseState;