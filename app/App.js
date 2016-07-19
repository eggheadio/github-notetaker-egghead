var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
import { hashHistory } from 'react-router'
// `Router` no longer defaults the history prop to hash history. 
//  Please use the `hashHistory` singleton instead. 
//  http://tiny.cc/router-defaulthistory

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
  )