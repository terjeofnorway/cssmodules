
import React, { Component } from 'react';
import logo from './logo.svg';
import app from './App.css';
import Hello from './hello.js'

class ErrorHandler extends Component {
  state = { error: false}

  componentDidCatch (error, info) {
    console.log('error')
    console.log(error)

    this.setState({error:true});
  }

  render() {
    console.log(app)

    if(this.state.error) { return <div>Error</div>}

    return this.props.children;
  }
}

export default ErrorHandler;
