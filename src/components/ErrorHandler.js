import React, { Component } from 'react';

class ErrorHandler extends Component {
  state = { error: false}

  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    if (this.state.error) { return <div>Error</div> }

    return this.props.children;
  }
}

export default ErrorHandler;
