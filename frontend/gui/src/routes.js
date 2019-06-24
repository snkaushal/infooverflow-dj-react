import React from 'react';
import { Route } from 'react-router-dom';
import Articles from './Components/Articles';
import Article from './Components/Article';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Articles}/>
    <Route exact path='/:articleID' component={Article}/>
  </div>
)

export default BaseRouter;