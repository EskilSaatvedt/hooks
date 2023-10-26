import React from 'react';
import Container from './components/Container';
import { User } from './utils/types';
import { UserContext } from './components/UserContext';
import { SpaceFranchisesProvider } from './components/SpaceFranchisesProvider';

const user:User = {
  id: 42,
  name: 'Arthur Dent'
};


const  App = () => {
  return (
    <div >
      <UserContext.Provider value={user}>
        <SpaceFranchisesProvider>
          <Container/>
        </SpaceFranchisesProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
