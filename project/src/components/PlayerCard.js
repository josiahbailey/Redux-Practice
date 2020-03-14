import React from 'react';

const PlayerCard = ({ player }) => {
   const { name, rank, nickname } = player
   return (
      <div className='card'>
         <h3>{name}</h3>
         <h3>{rank}</h3>
         <h3>{nickname}</h3>
      </div>
   );
}

export default PlayerCard;