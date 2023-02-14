import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Pokelist from './components/Pokelist/Pokelist';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Pokelist />
    </React.Fragment>
  );
}

export default App;