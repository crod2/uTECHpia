import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { getDirectRuleOfThree, getPolylinePoints } from '../../utils/usefulFunctions';

const UTechDot = props => {
  const { dotData } = props;
  const { data, setData, screenSize, selectedDot, setSelectedDot, setVisibleLines } = useContext(
    ContextUTech
  );
  const [isHovered, setIsHovered] = useState(false);
  const hoverRadius = getDirectRuleOfThree(1920, screenSize.width, 200);
  const strokeWidth = 24;
  const dotAnimationHover = keyframes`
    0% {
      transform: scale(1);
    }
    95% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1.2);
    }
  `;

  const dotAnimationInit = keyframes`
    0% {
      transform: scale(0);
    }
    95% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  `;

  const CircleContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: black;
    border: 20px solid white;
    border-radius: 50%;
    top: ${dotData.position.y - strokeWidth}px;
    left: ${dotData.position.x - strokeWidth}px;
    width: ${dotData.radius * 2}px;
    height: ${dotData.radius * 2}px;
    color: white;
    cursor: pointer;
    &:hover {
      transform-origin: center center;
      transform: scale(1);
      animation-iteration-count: 1;
      animation-name: ${dotAnimationHover};
      animation-duration: 0.1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  `;

  const DotTextStyled = styled.h3`
    background-color: black;
    width: fit-content;
  `;

  const connectDots = () => {
    setSelectedDot(dotData.id);

    const polylines = getPolylinePoints([...data], dotData.id);
    setVisibleLines(polylines);
  };

  const disconnectDots = () => {
    setSelectedDot(0);
    setVisibleLines([]);
  };

  return (
    <CircleContainerStyled
      onMouseEnter={() => {
        connectDots();
      }}
      onMouseLeave={() => {
        disconnectDots();
      }}
    >
      <DotTextStyled>{selectedDot === dotData.id && dotData.title}</DotTextStyled>
    </CircleContainerStyled>
  );
};

UTechDot.propTypes = {
  dotData: propTypes.shape({
    title: propTypes.string,
    radius: propTypes.number,
    id: propTypes.number,
    related: propTypes.array,
    position: propTypes.shape({
      x: propTypes.number,
      y: propTypes.number,
    }),
  }),
};

export default UTechDot;
