import React, { useState, useCallback } from 'react';

function UseCallback() {
  const [counter, setCounter] = useState(0);

  //usado para passar funções para componentes filhos
  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const handleMinus = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

  return (
    <div>
      <h1>UseCallback</h1>
      <h2>{counter}</h2>
      <Button onClick={handlePlus}>+</Button>
      <Button onClick={handleMinus}>-</Button>
    </div>
  );
}

function Button(props) {
  console.log(props)
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default UseCallback;