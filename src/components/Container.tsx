import React, { ReactElement } from 'react';
import Header from './Header';
import FavoritePlanets from './FavoritePlanets';

const Container = ():ReactElement => {
  return (
    <div className="App">
      <Header />
      <FavoritePlanets />
    </div>
  );
}

export default Container;
