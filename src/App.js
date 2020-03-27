import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oojsx from './pages/Oojsx.js'
import OojsxClass from './pages/OojsxClass.js'
function App() {
  const count = 100
  return (
    <div className="App">
      <Oojsx />
      <OojsxClass outCount={count} />
    </div>
  );
}

export default App;
