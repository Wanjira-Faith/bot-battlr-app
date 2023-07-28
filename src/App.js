import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [botArmy,setBotArmy] = useState([]);

  function addBoToArmy(bot) {
    if (botArmy.includes(bot)) {
      setBotArmy(botArmy.filter((item) => item !== bot));
    } else {
      setBotArmy([...botArmy, bot]);
    }
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
