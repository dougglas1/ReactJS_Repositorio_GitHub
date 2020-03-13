import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

// Switch - Permitir que somente uma rota seja chamada por vez

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
