import React from 'react'

function BotItem({bot}) {
  return (
    <div className='bot-item'>
        <img src={bot.avatar_url} alt={bot.name}/>
        <h3>Name: {bot.name}</h3>
        
    </div>
  )
}

export default BotItem
