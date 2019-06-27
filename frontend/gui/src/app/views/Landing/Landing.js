import React from 'react';
import Login from '../../../lib/components/Login';
import classnames from 'classnames';

export default class Landing extends React.Component {
  render() {
    return (
      <div className={classnames('io-landing')}>
      <h3>Hi, Welcome to InfoOverflow</h3>
      <Login />
      </div>
      )
  }
}