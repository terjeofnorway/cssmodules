import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const errorHandler = () => {};

module.hot.accept(
  errorHandler, // Function to handle errors when evaluating the new version
);
