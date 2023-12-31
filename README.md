# Bot Battlr App

# Table of Contents
* Description
* Core Features
* Technologies used
* Setup and Installation
* API Endpoints
* Usage
* License
* Author

# Description
Bot Battlr App is a web application built using React that allows users to create and manage their own army of bots. Users can browse a collection of bots, add them to their army, and remove them permanently. The app also utilizes React Router for smooth navigation between different routes.

# Core Features
* See profiles of all bots rendered in `BotCollection`.
* Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
* Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
* Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

# Technologies Used
* React
* React Router
* JavaScript 
* CSS
* Backend API (to fetch bots data)

# Setup and Installation

1. Clone the repository from GitHub.
2. Run `npm install` to install the required dependencies.
3. Start the backend server by running `json-server --watch db.json` in the project directory.
4. Run the React app using `npm start`.
5. Open the app in your web browser by navigating to `http://localhost:3000/`.

# API Endpoints
* `GET /bots`: Retrieves a list of bots from the backend.
* `DELETE /bots/:id`: Deletes a bot permanently from the backend.

# Usage
* The BotCollection component displays the available bots in a grid layout.
* Clicking on a bot in the collection enlists it into the user's bot army, and the enlisted bots are displayed in the YourBotArmy component. 
* Users can remove enlisted bots by clicking on them, or permanently discharge a bot by clicking the "x" button.

# License
This project is licensed under the MIT License.

# Author
Wanjira Faith - Software Engineer
