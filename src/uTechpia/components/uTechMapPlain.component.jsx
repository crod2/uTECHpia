import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';
import UTechDot from './uTechDot.component';

const UtechMapPlain = () => {
  const { data, visibleLines, description } = useContext(ContextUTech);

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

  const TextDescriptions = styled.p`
    bottom: 10px;
    left: 10px;
    position: absolute;
    max-width: 40%;
    text-align: left;
  `;

  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <TextDescriptions>{description}</TextDescriptions>
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
                style={{ fill: 'none', stroke: 'magenta', strokeWidth: '20px' }}
              />
            );
          })}
        </MapSvgStyled>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UtechMapPlain;
