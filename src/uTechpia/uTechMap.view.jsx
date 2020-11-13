import React from 'react';
import { NavLink } from 'react-router-dom';

import { WrapperStyled, WrapperContainerStyled } from '../sharedStyles.styled.js';

const UTechMapView = () => {
  const title = '<uTECHpia>';
  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <h1>
          <NavLink to="/utechstory">{title}</NavLink>
        </h1>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UTechMapView;
