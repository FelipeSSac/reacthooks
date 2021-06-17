import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState(' ');

  //nao reexecuta a funcao de renderizacao ao mudar o valor da variavel dentro das chaves

  const total = useMemo(() => {
    console.log('ok')
    return (counter * 123123 * 213123 * 123123123);
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>UseMemo</h1>
      <h3>{name}</h3>
      <h4>{counter}</h4>
      <button onClick={handlePlus}>+</button>
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default UseMemo;