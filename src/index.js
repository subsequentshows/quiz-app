import React  from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Ping heroku
let http = require("http");
setInterval(function() {
    http.get("https://tet-quiz.herokuapp.com/");
}, 300000); // every 5 minutes (300000)