import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';

class SignUp extends React.Component {
  onSignUp = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password2 = e.target.elements.password2.value;
    const password1 = e.target.elements.password1.value;
    this.props.userSignUp(username, email, password1, password2);
    this.props.history.push('/articles');
  }

  render() {
    const { loading, error } = this.props;

    return (
      <form onSubmit={(e) => this.onSignUp(e)}>
        {error ? alert(error) : null}
        {loading ? 'Loading...' : ''}
        <input type='text' name='username' />
        <input type='email' name='email' />
        <input type='password' name='password1' />
        <input type='password' name='password2' />
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
    userSignUp: (username, email, password1, password2) => (dispatch(actions.authSignUp(username, email, password1, password2)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);