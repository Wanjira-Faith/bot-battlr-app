import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
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
