import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <>
      <BrowserRouter>
      <Route exact path='/' Component={BotCollection}/>
      <Route exact path='/bot-army' Component={YourBotArmy}/>
      </BrowserRouter>
    </>
  );
}

export default App;
