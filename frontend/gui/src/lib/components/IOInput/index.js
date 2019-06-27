import React from 'react';
import classnames from 'classnames';

class IOInput extends React.Component {
  render() {
    const { type, name } = this.props;
    switch(type) {
      case 'submit' : return <input type='submit' name={name} className={classnames('io-input', 'io-input--submit')}/>
      case 'text' : return <input type='text' name={name} className={classnames('io-input')}/>
      case 'textfield' : return <input type='textfield' name={name} className={classnames('io-input')}/>
      case 'password' : return <input type='password' name={name} className={classnames('io-input')}/>
      case 'email': return <input type='text' name={name} className={classnames('io-input')}/>
      default: return null;
    }
  }
}

export default IOInput;