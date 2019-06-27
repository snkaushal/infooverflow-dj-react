import React from 'react';
import BaseRouter from './app/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import classnames from 'classnames';
import './styles/_main.scss';

class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div className={classnames('io-app')}>
        <Router>
          <BaseRouter/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    isLoading: state.loading
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
