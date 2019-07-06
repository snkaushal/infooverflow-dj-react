import React from 'react';
import classnames from 'classnames';

const IOHolder = (props) => {
  switch (props.shape) {
    default:
      return (
        <div className={classnames('io-holder')}>
          {props.children}
        </div>
      )
    case 'circle':
      return (
        <img 
          src={props.imgSrc}
          alt={props.alt}
          className={classnames('io-holder', props.className)}
          style={{ borderRadius: `${props.width}%` , width: `${props.width}%` }}
        />
      )
  }
}

export default IOHolder;