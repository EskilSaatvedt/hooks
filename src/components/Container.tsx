import React from 'react';
import Header from './Header';
import { User } from '../utils/types';

type ContainerProps = {
  user: User;
};

const Container = ({user}: ContainerProps):JSX.Element => {
  return (
    <div className="App">
      <Header user={user}/>
      {/* <FavoritePlanets /> */}
    </div>
  );
}

export default Container;
