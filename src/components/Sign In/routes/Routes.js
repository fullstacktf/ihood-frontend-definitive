import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import signIn from '../pages/signIn';
import App from '../pages/App';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={signIn}/>
        <Route exact path="/menu" component={App}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
