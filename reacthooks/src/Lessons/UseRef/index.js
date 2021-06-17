import React, { useRef } from 'react';

//nao impacta na renderizacao ao mudar algo
//acessa elementos html
function UseRef() {
  console.log('rendered');

  //objeto
  const inputRef = useRef(null);

  function handlePrintValue() {
    //referencia o elemento
    alert(inputRef.current.value);
  }

  return (
    <div>
      <h1>UseRef</h1>
      <input ref={inputRef} />
      <button onClick={handlePrintValue}>Print value</button>
    </div>
  );
}

export default UseRef;