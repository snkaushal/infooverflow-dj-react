import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class IOLogo extends React.Component {
  render() {
    return (
      <b className={classnames('io-logo')}>
      <NavLink to='/'><span>I</span><span>O</span></NavLink>
      </b>
    )
  }
}

export default IOLogo;