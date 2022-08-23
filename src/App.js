import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';
import GameBoard from './components/GameBoard';

function App() {
  
  return (
    <div className="App">
      <Header title={'Memory Card'}/>
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
