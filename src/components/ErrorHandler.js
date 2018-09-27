import React, { Component } from 'react';
import PT from 'prop-types';

class ErrorHandler extends Component {
  constructor() {
    super();
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) { return <div>Error</div>; }

    return children;
  }
}

ErrorHandler.propTypes = {
  children: PT.node.isRequired,
};

export default ErrorHandler;
