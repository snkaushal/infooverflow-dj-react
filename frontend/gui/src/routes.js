import React from 'react';
import { Route } from 'react-router-dom';
import Articles from './Components/Articles';
import Article from './Components/Article';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
const BaseRouter = (props) => (
  <div>
    <Route exact path='/articles/' component={Articles}/>
    <Route exact path='/articles/:articleID' component={Article}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/signup' component={SignUp}/>
  </div>
)

export default BaseRouter;
