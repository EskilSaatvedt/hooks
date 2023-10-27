import React from 'react';
import Container from './components/Container';
import { User } from './utils/types';
import { UserContext } from './hooks/UserContext';
import { PlanetProvider } from './hooks/PlanetContext';

const user:User = {
  id: 42,
  name: 'Arthur Dent'
};

const  App = () => {
  return (
    <div data-testid="app">
      <UserContext.Provider value={user}>
        <PlanetProvider>
          <Container/>
        </PlanetProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
