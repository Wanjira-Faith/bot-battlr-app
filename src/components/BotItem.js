import React from 'react'

function BotItem({bot}) {
  return (
    <div className="bot-item">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>{bot.bot_class}</p>
      <div style={{ display: 'flex' }}>
        <p>
          <i className="fa-solid fa-heart-pulse"></i>
          {bot.health}
        </p>
        <p>
          <i className="fa-solid fa-bolt"></i>
          {bot.damage}
        </p>
        <p>
          <i className="fa-solid fa-shield-halved"></i>
          {bot.armor}
        </p>
      </div>
    </div>
  );
}

export default BotItem
