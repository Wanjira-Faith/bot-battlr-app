import React from 'react'
import BotItem from './BotItem'

function YourBotArmy({ botArmy, removeFromArmy}) {
  function handleRemoveFromArmy(bot) {
    console.log(bot.id);
    removeFromArmy(bot);
  }

  return (
    <>
      <h2 className="army-header">Bot Army Collection</h2>
      <div className="army-collection">
        {botArmy.map((bot) => (
          <div key={bot.id} onClick={() => handleRemoveFromArmy(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>Class: {bot.bot_class}</p>
            <hr />
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
          </div>
        ))}
      </div>
    </>
  );
}

export default YourBotArmy
