import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';
import UTechDot from './uTechDot.component';

const UtechMapPlain = () => {
  const { data } = useContext(ContextUTech);

  const MapSvgStyled = styled.svg`
    background-color: black;
    width: 100%;
    height: 100%;
  `;

  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <MapSvgStyled>
          {data.map(element => {
            return <UTechDot dotData={element} key={element.id} />;
          })}
        </MapSvgStyled>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UtechMapPlain;
