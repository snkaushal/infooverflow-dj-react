import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Articles from '../app/views/Articles';
import Article from '../app/views/Article';
import Landing from '../app/views/Landing';
import MainLayout from './layout/MainLayout';

const PrivateRoute = ({ component, isAuth, ...rest }) => (
  isAuth ? <Route {...rest} component={component}/> :
  <Redirect to='/' />
)

const BaseRouter = (props) => (
  <MainLayout>
    <Route exact path='/' component={Landing} />
    <PrivateRoute exact isAuth={props.isAuthenticated} path='/articles/:articleID' component={Article} />
    <PrivateRoute exact isAuth={props.isAuthenticated} path='/articles' component={Articles} />
  </MainLayout>
)

export default BaseRouter;
