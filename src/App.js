import React from 'react';
import UTechRoutes from './uTechRoutes';
import { ProviderUTech } from './uTechpia/context/uTechContext';
import './App.css';

const App = () => (
  <ProviderUTech>
    <UTechRoutes />
  </ProviderUTech>
);

export default App;
