
import React, { Component } from 'react';
import UserGreeting from '../userGreeting/UserGreeting';

import logo from './logo.svg';
import main from './Main.css';

class App extends Component {
  constructor() {
    super();
    this.state = { error: false };
  }

  render() {
    const { error } = this.state;
    if (error) { return <div>Error</div>; }

    return (
      <div className={main.Main}>
        <header className={main.MainHeader}>
          <img src={logo} className={main.MainLogo} alt="logo" />
          <h1 className={main.MainTitle}>Welcome to React</h1>
        </header>
        <UserGreeting />
        <p className={main.MainIntro}>
          Welcome to the worlds spiffies webapp.
        </p>
      </div>
    );
  }
}

export default App;
