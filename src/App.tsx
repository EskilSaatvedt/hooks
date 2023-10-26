import React from 'react';
import Container from './components/Container';
import { User } from './utils/types';
import { UserContext } from './components/UserContext';

const user:User = {
  id: 42,
  name: 'Arthur Dent'
};


const  App = () => {
  return (
    <div >
      <UserContext.Provider value={user}>
        <Container/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
