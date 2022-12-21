import React from 'react';
import GlobalStyles from './styles/index';
import { RoutesApp } from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
const App=()=> {
  return (
    <BrowserRouter>
      <Header/>
      <RoutesApp/>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
