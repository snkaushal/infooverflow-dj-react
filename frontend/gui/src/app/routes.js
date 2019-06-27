import React from 'react';
import { Route } from 'react-router-dom';
import Articles from '../app/views/Articles';
import SignUp from '../lib/components/SignUp';
import Login from '../lib/components/Login';
import Article from '../app/views/Article';
import MainLayout from './layout/MainLayout';

const BaseRouter = (props) => (
  <MainLayout>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/' component={Articles}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/articles/:articleID' component={Article} />
  </MainLayout>
)

export default BaseRouter;
