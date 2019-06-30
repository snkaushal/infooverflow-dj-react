import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';
import IOInput from '../IOInput';
import classnames from 'classnames';
import IOLogo from '../IOLogo';
import IOCard from '../IOCard';

class SignUp extends React.Component {
  onSignUp = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password2 = e.target.elements.password2.value;
    const password1 = e.target.elements.password1.value;
    this.props.userSignUp(username, email, password1, password2);
    this.props.closeModal();
  }

  render() {
    return (
      <form 
        className={classnames('io-signup')}
        onSubmit={(e) => this.onSignUp(e)} >
        <IOCard>
          <IOLogo />
          <p>Please fill in the registration details</p>
          <label><b>Username : </b></label>
          <IOInput type={'text'} name={'username'} />
          <label><b>Email : </b></label>
          <IOInput type={'email'} name={'Email'} />
          <label><b>Password : </b></label>
          <IOInput type={'password'} name={'password1'} />
          <label><b>Confirm Password : </b></label>
          <IOInput type={'password'} name={'password2'} />
          <IOInput type={'submit'} name={'Sign Up'} />
        </IOCard>
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