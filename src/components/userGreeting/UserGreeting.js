import React, { Component } from 'react';
import PT from 'prop-types';

import greeting from './UserGreeting.css';

class UserGreeting extends Component {
  render() {
    const { name } = this.props;
    return (
      <h1 className={greeting.WarmFuzzyHeader}>
        Hello {name}
      </h1>
    );
  }
}

UserGreeting.propTypes = {
  name: PT.string,
};

UserGreeting.defaultProps = {
  name: 'John Doe',
};

export default UserGreeting;
