import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';
import IOInput from '../IOInput';
import IOLogo from '../IOLogo';
import IOCard from '../IOCard';
import classnames from 'classnames';

class Login extends React.Component {
  loginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.userLogin(username, password);
    this.props.closeModal();
  }

  render() {
    return (
        <form
          className={classnames('io-login')}
          onSubmit={(e) => this.loginSubmit(e)} >
          <IOCard>
            <IOLogo />
            <p>Please fill in the login details</p>
            <label><b>Username : </b></label>
            <IOInput type={'text'} name={'username'} />
            <label><b>Password : </b></label>
            <IOInput type={'password'} name={'password'} />
            <IOInput type={'submit'} name={'Login'} />
            <br />
          </IOCard>
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (username, password) => (dispatch(actions.authLogin(username, password)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);