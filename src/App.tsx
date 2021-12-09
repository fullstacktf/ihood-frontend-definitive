import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import DecoVLines from './components/DecoVLines';


function App() {
  return (
    <div className="App">
      <Home />
      <DecoVLines />
      <Login />
    </div>
  );
}

export default App;
