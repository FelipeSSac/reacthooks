import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function UseContext() {


  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      {/* <ThemeContext.Provider value={{ mode: 'light' }}> */}
      <Button />
      <h1>useContext</h1>
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  //utiliza o contexto para identificar o theme.mode
  return (
    <button>{theme.mode}</button>
  )
}

export default UseContext;