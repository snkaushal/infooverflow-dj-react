import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

const IOLink = (props) => {
  return (
    props.isAuthenticated ?
      <NavLink
        className={classnames('io-link', props.className)}
        to={props.to}
      >
        <b>{props.value}</b>
      </NavLink> :
      <b
        className={classnames('io-link', props.className)}
        onClick={props.onClick}
      >
        {props.value}
      </b>
  )
}

export default IOLink;