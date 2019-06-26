import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

const IOLink = (props) => {
  return <NavLink className={classnames('io-link')} to={props.to}><b>{props.value}</b></NavLink>
}

export default IOLink;