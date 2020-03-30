import React from 'react';
import logo from './logo.svg';
import './App.css';
import Oojsx from './pages/Oojsx.js'
import OojsxClass from './pages/OojsxClass.js'
import JsxList from './pages/jsxList.js'
import JsxForm from './pages/jsxForm.js'

function App() {
  const count = 1
  return (
    <div className="App">
      <Oojsx testName="测试名"/>
      <OojsxClass outCount={count} />
      <JsxList />
      <JsxForm />
    </div>
  );
}

export default App;
