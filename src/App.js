import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function NumPlayers(){

  alert("hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="BlackLotusBG.jpg" className="App-logo" alt="Black Lotus" style={{borderRadius: 10}} />
        <p>Welcome to MTG Game Night</p>
        <button type="submit" class="btn btn-primary" onClick={NumPlayers}>Start a game!</button>
      </header>
    </div>
  );
}





export default App;
