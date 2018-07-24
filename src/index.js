import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  // console.log({root})
  ReactDOM.render(<App />, root);
  registerServiceWorker();
})
