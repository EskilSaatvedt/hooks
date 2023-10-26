import React from 'react';
import Header from './Header';
import { User } from '../utils/types';
import FavoritePlanets from './FavoritePlanets';

type ContainterProps = {
  user: User;
}

const Container = ({user}: ContainterProps):JSX.Element => {
  return (
    <div className="App">
      <Header user={user}/>
      <FavoritePlanets />
    </div>
  );
}

export default Container;
