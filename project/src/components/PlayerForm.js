import React, { useState } from 'react';

const PlayerForm = ({ addPlayer }) => {
   const [player, setPlayer] = useState({
      name: '',
      rank: '',
      nickname: '',
      id: Date.now()
   })
   const handleChange = e => {
      setPlayer({
         ...player,
         [e.target.name]: e.target.value
      })
   }
   const handleSubmit = e => {
      e.preventDefault()
      addPlayer(player)
      setPlayer({
         name: '',
         rank: '',
         nickname: '',
         id: Date.now()
      })
   }
   return (
      <form className='form' onSubmit={handleSubmit}>
         <input className='input' onChange={handleChange} name='name' value={player.name} type='text' placeholder='Name' />
         <input className='input' onChange={handleChange} name='rank' value={player.rank} type='text' placeholder='Rank' />
         <input className='input' onChange={handleChange} name='nickname' value={player.nickname} placeholder='Nickname' />
         <button type='submit' className='btn'>Add a player</button>
      </form>
   );
}

export default PlayerForm;