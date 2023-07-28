import React from 'react'
import BotItem from './BotItem'

function YourBotArmy({botArmy, removeFromArmy}) {

  return (
    <div className='army-collection'>
      <h2>Bot Army Collection</h2>
      {botArmy.map((bot) => {
        return (
          <div key={bot.id} onClick={() => handleRemoveFromArray(bot)} >
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
