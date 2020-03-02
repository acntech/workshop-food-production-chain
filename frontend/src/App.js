import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Farm from './farm/Farm';
import EcoStore from './ecoStore/EcoStore';

function App() {
  return (
    <div>
      <header className="background">
        <Router>
          <Route path="/fruitfarm"><Farm /></Route>
          <Route path="/ecostore"><EcoStore /></Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
