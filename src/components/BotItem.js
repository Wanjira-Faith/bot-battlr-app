import React from 'react'

function BotItem({bot, addBotToArmy, removePermananetly}) {

  function handleAdd(bot) {
    addBotToArmy(bot)
  }

  function handleDelete(bot) {
    removePermananetly(bot)
  }

  return (
    <div className="bot-item" key={bot.id} onClick={() => handleAdd(bot)} >
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <div>
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
      <button onClick={() => handleDelete(bot)}>X</button>
    </div>
  );
}

export default BotItem
