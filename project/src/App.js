import React from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm'
import './App.css';

function App() {
   return (
      <div className='center'>
         <h1>Soccer Players</h1>
         <PlayerForm />
         <PlayerList />
      </div>
   );
}

export default App;
