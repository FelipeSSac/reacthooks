import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState("");

  useEffect(() => {
    console.log("counter")
  }, [counter]);

  useEffect(() => {
    //ao iniciar ->
    console.log('abriu')
    console.log(name);
    //ao finalizar ->
    return () => console.log('fechou');
  }, [name]);
  //vigia a variavel no array, executa quando seu valor muda e ao carregar a tela
  //podem existir mais de 1

  return (
    <div>
      <h1>useEffect</h1>
      {name}
      <input type="text" onChange={e => setName(e.target.value)} />
      {counter}
      <input type="text" onChange={e => setCounter(e.target.value)} />
    </div>
  );
}

export default UseEffect;