import React from 'react';
import ErrorHandler from './components/ErrorHandler';
import Main from './components/main/Main';
import TitleComponent from './components/titleComponent/TitleComponent';

const App = () => {
  return (
    <ErrorHandler>
      <TitleComponent />
      <Main />
    </ErrorHandler>
  );
};

export default App;
