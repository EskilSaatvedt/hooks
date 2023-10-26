import React from 'react';
import Header from './Header';
import FavoritePlanets from './FavoritePlanets';

const Container = ():JSX.Element => {
  return (
    <div className="App">
      <Header />
      <FavoritePlanets />
    </div>
  );
}

export default Container;
