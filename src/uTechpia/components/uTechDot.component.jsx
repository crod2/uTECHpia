import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';

const UTechDot = props => {
  const { dotData } = props;
  const { screenSize } = useContext(ContextUTech);
  const [isHovered, setIsHovered] = useState(false);
  const biggerRadius = getDirectRuleOfThree(1920, screenSize.width, 175);

  const dotAnimation = keyframes`
    0% {
        r: ${dotData.radius};
        stroke-width: 24;
    }
    95% {
        r: ${biggerRadius * 2.5 + 5};
        stroke-width: 30;
    }
    100% {
        r: ${biggerRadius * 2.5};
        stroke-width: 30;
    }
  `;

  const CircleStyled = styled.circle`
    border: 24px solid white;
    &:hover {
      cursor: pointer;
      stroke-width: 24;
      animation-iteration-count: 1;
      animation-name: ${dotAnimation};
      animation-duration: 0.1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  `;

  return (
    <CircleStyled
      // <circle
      key={dotData.id}
      r={dotData.radius}
      cx={dotData.position.x + dotData.radius}
      cy={dotData.position.y + dotData.radius}
      stroke="white"
      strokeWidth={`24px`}
      className="lalala"
      onClick={() => console.log(dotData)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

UTechDot.PropTypes = {
  dotData: PropTypes.shape({
    title: PropTypes.string,
    radius: PropTypes.number,
    id: PropTypes.number,
    related: PropTypes.array,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
};

export default UTechDot;
