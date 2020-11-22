import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import UTechTitle from './uTechpia/components/titlePage/uTechTitle.component';
import UtechMapPlain from './uTechpia/components/uTechMapPlain.component';

const UTechRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={UTechTitle} />
      <Route path={'/utechmap'} component={UtechMapPlain} />
    </Switch>
  );
};
export default withRouter(UTechRoutes);
