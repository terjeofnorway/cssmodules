import React from 'react';
import PT from 'prop-types';

import greeting from './UserGreeting.css';

const UserGreeting = (props) => {
  const { name } = props;
  return (
    <h1 className={greeting.WarmFuzzyHeader}>
      Hello {name} !
    </h1>
  );
};

UserGreeting.propTypes = {
  name: PT.string,
};

UserGreeting.defaultProps = {
  name: 'John Doe',
};

export default UserGreeting;
