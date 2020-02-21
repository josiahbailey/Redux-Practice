import React from 'react';

const PlayerForm = () => {
   return (
      <form className='form'>
         <input className='input' type='text' placeholder='Name' />
         <input className='input' type='text' placeholder='Rank' />
         <input className='input' type='text' placeholder='Nick Name' />
         <button className='btn'>Add a player</button>
      </form>
   );
}

export default PlayerForm;