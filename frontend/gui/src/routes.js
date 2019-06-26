import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './app/views/Landing';
import Articles from './lib/components/Articles';
import SignUp from './lib/components/SignUp';

const BaseRouter = (props) => (
  <div>
    <Route exact path='/login' component={Landing}/>
    <Route exact path='/' component={Articles}/>
    <Route exact path='/signup' component={SignUp}/>
  </div>
)

export default BaseRouter;
