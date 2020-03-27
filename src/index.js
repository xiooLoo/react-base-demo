import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  /**
   * 严格模式 StrictMode
   * 
   * 严格模式检查仅在开发模式下运行；
   * 它们不会影响生产构建。
   ******************************
   * 目前有助于：
   -	识别不安全的生命周期
   -	关于使用过时字符串 ref API 的警告
   -	关于使用废弃的 findDOMNode 方法的警告
   -	检测意外的副作用
   -	检测过时的 context API
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
