import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { getData, addPlayer } from './actions/actions'

import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm'
import './App.css';


function App({ players, isFetching, error, getData, addPlayer }) {
   useEffect(() => {
      getData()
   }, [])
   return (
      <div className='App'>
         <h1>Soccer Players</h1>
         <PlayerForm addPlayer={addPlayer} getData={getData} />
         <PlayerList
            error={error}
            isFetching={isFetching}
            players={players} />
      </div>
   );
}

const mapStateToProps = state => (
   {
      players: state.players,
      isFetching: state.isFetching,
      error: state.error
   }
)

export default connect(mapStateToProps, { getData, addPlayer })(App);
