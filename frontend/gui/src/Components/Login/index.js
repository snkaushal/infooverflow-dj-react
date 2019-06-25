import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/auth';

class Login extends React.Component {
  loginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.userLogin(username, password);
    this.props.history.push('/articles');
  }

  render() {
    const { loading, error } = this.props;

    return (
      <form onSubmit={(e) => this.loginSubmit(e)}>
        {error ? alert(error) : null}
        {loading ? 'Loading...' : ''}
        <input type='text' name='username' />
        <input type='password' name='password' />
        <input type='submit' value='Login' />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (username, password) => (dispatch(actions.authLogin(username, password)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);