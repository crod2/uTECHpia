import React from 'react';
import { NavLink } from 'react-router-dom';

const UTechMapView = () => {
  const title = '<uTECHpia>';
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <NavLink to="/utechstory">{title}</NavLink>
        </h1>
      </header>
    </div>
  );
};

export default UTechMapView;
