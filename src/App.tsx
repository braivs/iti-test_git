import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function yo(a,b) {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, saepe?</p>
      <p>Lorem ipsum dolor.</p>
      <ul>
        <li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </li>
      </ul>
      <hr/>
      <p>1</p>
      <p>2</p>
    </div>


  );
}

export default App;
