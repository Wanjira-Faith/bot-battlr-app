import React, { useEffect, useState } from 'react'
import BotItem from './BotItem';

function BotCollection({addBotToArmy, removePermanently}) {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:3000/bots")
        .then((r) => r.json())
        .then((bots) => setBots(bots))
    }, []);

     function handleRemovePermanently(bot) {
       const newBots = bots.filter((item) => item.id !== bot.id);
       setBots(newBots);

       removePermanently(bot);
     }

  return (
    <>
    <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => {
          return <BotItem 
          key={bot.id} 
          bot={bot}
          addBotToArmy={addBotToArmy} 
          removePermanently={handleRemovePermanently} 
          />;
        })}
      </div>
    </>
  );
}

export default BotCollection
