import React from 'react';
import { NavLink } from 'react-router-dom';

import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';

const UTechStory = () => {
  const story = '<story>';
  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <h1>
          <NavLink to="/utechmap">{story}</NavLink>
        </h1>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UTechStory;
