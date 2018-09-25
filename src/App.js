
import React, { Component } from 'react';
import logo from './logo.svg';
import app from './App.css';
import Hello from './hello.js'
import ErrorHandler from './ErrorHandler.js'
import Main from './main.js'

class App extends Component {

  render() {

    return (
      <ErrorHandler>
        <Main />
      </ErrorHandler>
    );
  }
}

export default App;
