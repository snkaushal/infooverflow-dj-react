import React from 'react';
import classnames from 'classnames';

class IOLogo extends React.Component {
  render() {
    return (
      <b className={classnames('io-logo')}>
        <span>I</span><span>O</span>
      </b>
    )
  }
}

export default IOLogo;