import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import Home from '../../ui/pages/Home.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import About from '../../ui/pages/About.jsx';
import Matching from '../../ui/pages/Matching.jsx';
import Chat from '../../ui/pages/Chat.jsx';

//router
export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="matching/:role" component={Matching} />
      <Route path="chats/:chatId" component={Chat} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
