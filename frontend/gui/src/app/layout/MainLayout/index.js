import React from 'react';
import './styles.scss';
// import Header from './components/Header';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/auth';

class MainLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header {...this.props} logout={this.props.logout} /> */}
        <div className={'io-mainlayout'}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    username: state.username,
    useremail: state.useremail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionTypes.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);