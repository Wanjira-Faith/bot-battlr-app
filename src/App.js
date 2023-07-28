import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
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
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<BotCollection/>} ></Route> 
          <Route exact path="/bot-army" element={<YourBotArmy/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
