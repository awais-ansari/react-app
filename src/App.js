import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './routes/ProtectedRoute';
import Login from './components/Login';
import ROUTES from './routes/Routes';
import './App.scss';

const App = () => (
  <Switch>
    <Route path='/login' exact component={Login} />
    {ROUTES.map((route) => (
      <ProtectedRoute key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

export default App;
