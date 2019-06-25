import React from 'react';
import './App.css';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Store/actions/auth';

class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignUp();
    alert(this.props.isAuthenticated);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <BaseRouter {...this.props}/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token === null
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
