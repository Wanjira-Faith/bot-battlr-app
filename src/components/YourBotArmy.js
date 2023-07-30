import React from 'react'

function YourBotArmy({ botArmy, removeFromArmy}) {

  function handleRemoveFromArmy(bot) {
    removeFromArmy(bot);
  }

  return (
    <>
      <h2 className="army-header">
        Click on a bot in the bot collection to enlist it in your army.
      </h2>
      <div className="army-collection">
        {botArmy.map((bot) => (
          <div key={bot.id} onClick={() => handleRemoveFromArmy(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>Class: {bot.bot_class}</p>
            <hr />
            <div className="icons">
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
