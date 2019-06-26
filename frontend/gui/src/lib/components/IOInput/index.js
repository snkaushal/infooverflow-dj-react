import React from 'react';
import classnames from 'classnames';

class IOInput extends React.Component {
  render() {
    const { type, value } = this.props;
    switch(type) {
      case 'submit' : return <input type='submit' value={value} className={classnames('io-input', 'io-input--submit')}/>
      case 'text' : return <input type='text' value={value} className={classnames('io-input')}/>
      case 'password' : return <input type='password' value={value} className={classnames('io-input')}/>
      case 'email': return <input type='text' value={value} className={classnames('io-input')}/>
      default: return null;
    }
  }
}

export default IOInput;