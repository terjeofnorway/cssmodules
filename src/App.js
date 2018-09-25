import React, { Component } from 'react';
import ErrorHandler from './components/ErrorHandler';
import Main from './components/main/Main';

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
