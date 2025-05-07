import React from 'react';
import GameList from './components/GameList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Leader Games Deals</h1>
      <GameList />
    </div>
  );
};

export default App;