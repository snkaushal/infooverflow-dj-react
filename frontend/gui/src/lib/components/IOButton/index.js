import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

const IOButton = (props) => {
  return (
      <button className={classnames('io-button', props.className)}>
        <NavLink to={props.to}>{props.children}</NavLink>
      </button>
  )
}

export default IOButton;