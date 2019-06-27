import React from 'react';
import classnames from 'classnames';

const IOCard = (props) => {
  return <div className={classnames('io-card', props.className)}>
    {props.children}
  </div>
}

export default IOCard;