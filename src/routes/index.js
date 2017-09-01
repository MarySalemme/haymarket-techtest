import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'rootContainers/App';
import Home from 'rootContainers/Home';
import About from 'rootContainers/About';
import NotFound from 'rootContainers/NotFound';
import StyleGuide from 'rootContainers/StyleGuide';

export default (
  <Route path = "/" component = { App }>
    <IndexRoute component = { Home } />
    <Route path = "/advice" component = { NotFound } />
    <Route path = "/advice/:id" component = { NotFound } />
    <Route path = "/news" component = { NotFound } />
    <Route path = "/news/:id" component = { NotFound } />
    <Route path = '/about' component = { About } />
    <Route path = '/style-guide' component = { StyleGuide } />
    <Route path = "*" component = { NotFound } />
  </Route>
);