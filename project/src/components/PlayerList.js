import React from 'react';

import PlayerCard from './PlayerCard'

const PlayerList = ({ players, isFetching, error }) => {
   return (
      <div className='card-container'>
         {error ? <h2>ERROR</h2> : <></>}
         {isFetching ? <h2>LOADING...</h2> :
            players.map(player => (
               <PlayerCard player={player} />
            ))
         }
      </div>
   );
}

export default PlayerList;