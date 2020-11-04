import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';

const AppRoute = () => (
    <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Redirect to="/" />
    </Switch>
);

export default AppRoute;