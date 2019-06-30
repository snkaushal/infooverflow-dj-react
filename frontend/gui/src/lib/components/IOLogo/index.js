import React from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

class IOLogo extends React.Component {
  render() {
    return (
      <b className={classnames('io-logo')}>
      <Link to='/'><span>I</span><span>O</span></Link>
      </b>
    )
  }
}

export default withRouter(IOLogo);