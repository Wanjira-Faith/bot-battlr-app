import React from 'react'
import BotItem from './BotItem'

function YourBotArmy({ botArmy, removeFromArmy, addBotToArmy }) {
  function handleRemoveFromArmy(bot) {
    removeFromArmy(bot);
  }

  return (
    <>
      <h2 className="army-header">Bot Army Collection</h2>
      <div className="army-collection">
        {botArmy.map((bot) => {
          return (
            <div key={bot.id} onClick={() => handleRemoveFromArmy(bot)}>
              <BotItem
                bot={bot}
                botArmy={botArmy}
                removeFromArmy={removeFromArmy}
                addBotToArmy={addBotToArmy}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default YourBotArmy
