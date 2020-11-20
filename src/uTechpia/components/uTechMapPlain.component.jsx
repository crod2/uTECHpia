import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';
import UTechDot from './uTechDot.component';

const UtechMapPlain = () => {
  const { data, visibleLines } = useContext(ContextUTech);

  const MapDivStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  `;

  const MapSvgStyled = styled.svg`
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
  `;

  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <MapDivStyled>
          {data.map(element => {
            return <UTechDot dotData={element} key={element.id} />;
          })}
        </MapDivStyled>
        <MapSvgStyled>
          {visibleLines.map((line, index) => {
            return (
              <polyline
                key={index}
                points={line}
                style={{ fill: 'none', stroke: 'lightgrey', strokeWidth: '20px' }}
              />
            );
          })}
        </MapSvgStyled>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UtechMapPlain;
