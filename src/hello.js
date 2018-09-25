
import React, { Component } from 'react';
import logo from './logo.svg';
import app from './App.css';

class Hello extends Component {

  render() {
    const {name} = this.props;
    return (
      <div>
        Hello {name.first}
      </div>
    );
  }
}

export default Hello;
