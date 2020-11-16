import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';

const UTechDot = props => {
  const { dotData } = props;
  const { data, setData } = useContext(ContextUTech);
  const [isActive, setIsActive] = useState(false);

  const dotAnimationHover = keyframes`
    0% {
        r: ${dotData.radius};
        stroke-width: 24;
    }
    95% {
        r: ${dotData.radius + 20};
        stroke-width: 30;
    }
    100% {
        r: ${dotData.radius + 15};
        stroke-width: 30;
    }
  `;

  const CircleStyled = styled.circle`
    border: 24px solid white;
    cursor: pointer;
    &:hover {
      cursor: pointer;
      animation-iteration-count: 1;
      animation-name: ${dotAnimationHover};
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
      onClick={() => setIsActive(!isActive)}
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
