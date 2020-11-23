import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Stack from './Components/Stack';

export default (
  <div>
    <Route path='/' component={NavBar} />
    <Switch>
      <Route lpath='/landing' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/stack' component={Stack} />
    </Switch>
  </div>
)