import React from 'react';
import Container from './components/Container';
import { User } from './utils/types';

const user:User = {
  id: 42,
  name: 'Arthur Dent'
};


const  App = () => {
  return (
    <div >
      <Container user={user}/>
    </div>
  );
}

export default App;
