import React from 'react';
import classnames from 'classnames';

class IOInput extends React.Component {
  render() {
    const { type, name, value } = this.props;
    switch (type) {
      case 'submit': return <input
        type='submit'
        value={name}
        className={classnames('io-input', 'io-input--submit')}
      />
      case 'text': return <input 
        type='text' 
        name={name} 
        value={value} 
        className={classnames('io-input')} />
      case 'textfield': return <textarea 
        row={'5'} 
        column={'20'} 
        value={value} 
        name={name} 
        className={classnames('io-input', 'io-input--textfield')} />
      case 'password': return <input 
        type='password' 
        name={name} 
        className={classnames('io-input')} />
      case 'email': return <input 
        type='text' 
        name={name} 
        value={value} 
        className={classnames('io-input')} />
      default: return null;
    }
  }
}

export default IOInput;