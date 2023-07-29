import './App.css';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [botArmy,setBotArmy] = useState([]);

  function addBotToArmy(bot) {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  }

  function removeFromArmy(bot) {
    const newBots = botArmy.filter((item) => item !== bot)
    setBotArmy(newBots);
  }

  function removePermanently(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, {method: "DELETE"})
    .then((r) => r.json())
    .then(() => {
       const newBots = botArmy.filter((item) => item !== bot);
       setBotArmy(newBots);
    })
  }

  return (
    <div className="App">
      <YourBotArmy botArmy={botArmy} removeFromArmy={removeFromArmy} />
      <BotCollection addBotToArmy={addBotToArmy} removePermanently={removePermanently} />
    </div>
  );
}

export default App;
