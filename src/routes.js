import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Stack from './Components/Stack';
import BuncoDice from './Components/sideProjects//buncoDice/BuncoDice';
import Landing from './Components/Landing';

export default (
  <div>
    <Route path='/' component={NavBar} />
    <Switch>
      <Route exact path='/landing' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/stack' component={Stack} />
      <Route path='/buncoDice' component={BuncoDice} />
    </Switch>
  </div>
)