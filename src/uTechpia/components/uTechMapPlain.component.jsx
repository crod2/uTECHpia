import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataJson from '../../utils/data';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';
import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';
import UTechDot from './uTechDot.component';

const UtechMapPlain = () => {
  const [data, setData] = useState(dataJson);
  const [screenSize, setScreenSize] = useState({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    console.log({ screenHeight, screenWidth });
    setScreenSize({
      width: screenHeight,
      height: screenWidth,
    });

    const responsiveData = data.map(dot => {
      return {
        ...dot,
        radius: getDirectRuleOfThree(1920, screenWidth, dot.radius),
        position: {
          x: getDirectRuleOfThree(1920, screenWidth, dot.position.x),
          y: getDirectRuleOfThree(1080, screenHeight, dot.position.y),
        },
      };
    });
    setData(responsiveData);
  }, []);

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
