import React from 'react';
import GlobalStyles from './styles/index';
import { RoutesApp } from './routes/index';
import { BrowserRouter } from 'react-router-dom';

const App=()=> {
  return (
    <BrowserRouter>
      <RoutesApp/>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
