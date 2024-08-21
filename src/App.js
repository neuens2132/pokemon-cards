import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonPictures from './components/PokemonPictures';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar />
        <HomePage />
      </div>
      
      <Routes>
        <Route path="/set/:setId" element={<PokemonPictures />} />
        <Route path="/" element={<HomePage />}>
          {/* <h1>Welcome to the Pokémon TCG App</h1> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
