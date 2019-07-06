import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import './styles.scss';
import progLanguages from '../../../lib/assets/images/cpg.png';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import * as actionTypes from '../../../store/actions/auth';

class Landing extends React.Component {

  render() {
    const { isAuthenticated, username, logout } = this.props;

    return (
      <div className={classnames('io-landing')}>
        <div className={classnames('io-row')}>
          <Header isAuthenticated={isAuthenticated} username={username} logout={logout}/>
        </div>
        <div className={classnames('io-row')}>
          <AboutUs />
        </div>
        <div>
          <img src={progLanguages} alt={'programming languages'} width='100%'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionTypes.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);