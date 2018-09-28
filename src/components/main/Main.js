
import React, { Component } from 'react';
import UserGreeting from '../userGreeting/UserGreeting';

import logo from './logo.svg';
import main from './Main.css';

class App extends Component {
  constructor() {
    super();
    this.state = { error: false, isExtraInformationVisible: false };
  }

  showExtraInformation = () => {
    this.setState({ isExtraInformationVisible: true });
  };

  render() {
    const { error, isExtraInformationVisible } = this.state;
    const { showExtraInformation } = this;
    if (error) { return <div>Error</div>; }

    return (
      <div className={main.Main}>
        <header className={main.MainHeader}>
          <img src={logo} className={main.MainLogo} alt="logo" />
          <h1 className={main.MainTitle}>Welcome to React</h1>
          <button type="button" onClick={showExtraInformation}>Tell me more!</button>
        </header>
        <UserGreeting />
        <div className={main.MainIntro}>
          Welcome to the worlds spiffies webapp.
          { isExtraInformationVisible && <div>Some extra information goes here.</div>}
        </div>
      </div>
    );
  }
}

export default App;
