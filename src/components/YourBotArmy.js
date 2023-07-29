import React from 'react'
import BotItem from './BotItem'

function YourBotArmy({botArmy, removeFromArmy}) {

   function handleRemoveFromArmy(bot) {
     removeFromArmy(bot);
   }

  return (
    <div className='army-collection'>
      <h2>Bot Army Collection</h2>
      {botArmy.map((bot) => {
        return (
          <div key={bot.id} onClick={() => handleRemoveFromArmy(bot)} >
            <BotItem
              bot={bot}
              botArmy={botArmy}
              removeFromArmy={removeFromArmy}
            />
          </div>
        );
      })}
    </div>
  )
}

export default YourBotArmy
