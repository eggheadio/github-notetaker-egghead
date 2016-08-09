var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

// If you receive this warning:
// Warning: [react-router] Location "//profile/Tyler" did not match any routes
// delete the hash (?_k=ebbms1) and reload the page with the route.

module.exports = (
  <Route path="/" component={Main}>
    <Route  path="/profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
