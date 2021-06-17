import React, { useState, useEffect, useLayoutEffect } from 'react';

//executa antes de exibir as alterações para o usuario
function UseLayoutEffect() {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    console.log('useEffect 1')
  }, [])

  useLayoutEffect(() => {
    console.log('useEffect 2')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  function handlePlus() {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>UseLayoutEffect</h1>
      <h2>{counter}</h2>
      <button></button>
    </div>
  );
}

export default UseLayoutEffect;