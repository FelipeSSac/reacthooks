import React, { useReducer } from 'react';

//semelhante ao useState
//array com duas propriedades
// 1 parametro funcao do hook
// 2 parametro nome do hook
// 3 parametro nome inicial
//sempre retorna algo
//state => seu valor
//action => tudo que vier dentro do objeto do dispatch
function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    //envia o type 'plus' dentro de um objeto literal
    dispatch({ type: 'plus' });
  }

  function handleMinus() {
    //envia o type 'minus' dentro de um objeto literal
    dispatch({ type: 'minus' });
  }

  return (
    <div>
      <h1>UseReducer</h1>
      <h4>{state.counter}</h4>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default UseReducer;