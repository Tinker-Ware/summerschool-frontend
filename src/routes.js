import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainStore from './containers/MainStore';
import Checkout from './components/Checkout';

export default (
  <Route
    path="/"
    component={MainStore}>
		<Route
      path="/checkout" />
		<Route
      path="/user" />
    <Route
      path="/orderSummary" />
    <Route
      path="/women" />
    <Route
      path="/men" />
    <Route
      path="/feature" />
  </Route>
);
