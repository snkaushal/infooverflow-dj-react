import React from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

const IOLogo = (props) => (
  <b className={classnames('io-logo', props.className)}>
    <Link to='/'><span>I</span><span>O</span></Link>
  </b>
)

export default withRouter(IOLogo);