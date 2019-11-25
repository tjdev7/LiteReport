import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
          LiteReport
        </h1>
        <h6>
          Automatic Lighthouse reports for localhost projects. No internet connection required!
        </h6>

        <p>
          Outputs reports in csv, html and json files. Also shows a terminal summary
        </p>

        <p>
          Works on localhost port 3000. Type <span>npm i litereport</span> to start
        </p>



        <a
          className="App-link"
          href="https://github.com/Toughee/LiteReport"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github page
        </a>
      </header>
    </div>
  );
}

export default App;
