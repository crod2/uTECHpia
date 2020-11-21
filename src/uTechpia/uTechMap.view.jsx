import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapperContainerStyled, TitleStyled } from './uTechMap.view.styled';

const UTechMapView = () => {
  const mapTitle = '<uTECHpia>';
  return (
    <WrapperContainerStyled>
      <TitleStyled>
        <NavLink to="/utechstory" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          {mapTitle}
        </NavLink>
      </TitleStyled>
    </WrapperContainerStyled>
  );
};

export default UTechMapView;
