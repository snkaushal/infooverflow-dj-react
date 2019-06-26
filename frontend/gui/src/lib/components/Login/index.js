import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';
import classnames from 'classnames';
import '../../../styles/components/login.scss';
import { NavLink, withRouter } from 'react-router-dom';


class Login extends React.Component {
  loginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.userLogin(username, password);
    this.props.history.push('/');
  }

  render() {
    return (
      <form
        className={classnames('io-loginbox')}
        onSubmit={(e) => this.loginSubmit(e)}
      >
        <b className={classnames('io-loginbox__header')}>
          <span>I</span><span>O</span>
        </b>
        <p>Please fill in the login details</p>
        <label><b>Username : </b></label>
        <input type='text' name='username' />
        <label><b>Password : </b></label>
        <input type='password' name='password' />
        <input type='submit' value='Login' />
        <br />
        Don't have an account? <br/>
        <NavLink className={classnames('io-loginbox__link')} to='/signup'><b>Sign up</b></NavLink>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));