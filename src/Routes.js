import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Catalog from './screens/Catalog';

const Routes = () => {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      );
};

export default Routes;
