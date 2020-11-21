import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { getDirectRuleOfThree, getPolylinePoints } from '../../utils/usefulFunctions';
import SpeechFunction from '../../utils/speechSynthesisUtterance';

const UTechDot = props => {
  const { dotData } = props;
  const {
    data,
    setData,
    screenSize,
    selectedDot,
    setSelectedDot,
    setVisibleLines,
    setDescription,
  } = useContext(ContextUTech);
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
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #120826;
    border: 5px solid #a3f5cf;
    border-radius: 50%;
    top: ${dotData.position.y}px;
    left: ${dotData.position.x}px;
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

  const DotTextStyled = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 35px;
    display: inline;
    background-color: #120826;
    white-space: pre-wrap;
    color: white;
  `;

  const DotTextWrapperStyled = styled.div`
    text-align: center;
  `;

  const connectDots = () => {
    setSelectedDot(dotData.id);

    const polylines = getPolylinePoints([...data], dotData.id);
    console.log(dotData.position);
    console.log(polylines);
    setVisibleLines(polylines);

    return new SpeechFunction(dotData.title);
  };

  const disconnectDots = () => {
    setSelectedDot(0);
    setVisibleLines([]);
    // setDescription('');
  };

  const handleOnClick = () => {
    setDescription(dotData.description);
    return new SpeechFunction(dotData.description);
  };

  return (
    <CircleContainerStyled
      role="button"
      onMouseEnter={() => {
        connectDots();
      }}
      onMouseLeave={() => {
        disconnectDots();
      }}
      onClick={() => handleOnClick()}
    >
      <DotTextWrapperStyled>
        <DotTextStyled>{selectedDot === dotData.id && dotData.title}</DotTextStyled>
      </DotTextWrapperStyled>
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
