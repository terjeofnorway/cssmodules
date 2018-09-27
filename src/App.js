import React from 'react';
import ErrorHandler from './components/ErrorHandler';
import Main from './components/main/Main';

const App = () => {
  return (
    <ErrorHandler>
      <Main />
    </ErrorHandler>
  );
};

export default App;
