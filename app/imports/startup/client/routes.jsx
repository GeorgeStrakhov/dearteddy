import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
// import AppContainer from '../../ui/containers/AppContainer.js';
// import ListContainer from '../../ui/containers/ListContainer.js';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
