import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import UTechMapView from './uTechpia/uTechMap.view';
import UTechMap from './uTechpia/components/uTechMap.component';
import UTechStory from './uTechpia/components/uTechStory.component';

const UTechRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={UTechMapView} />
      <Route path={'/utechmap'} component={UTechMap} />
      <Route path={'/utechstory'} component={UTechStory} />
    </Switch>
  );
};
export default withRouter(UTechRoutes);
