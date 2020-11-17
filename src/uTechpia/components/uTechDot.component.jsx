import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ContextUTech } from '../context/uTechContext';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';
import { loroUtterance } from '../../utils/speechSynthesis';

const UTechDot = props => {
  const { dotData } = props;
  const { data, setData, screenSize } = useContext(ContextUTech);
  const [isActive, setIsActive] = useState(false);
  const hoverRadius = getDirectRuleOfThree(1920, screenSize.width, 200);
  console.log(dotData);

  const dotAnimationHover = keyframes`
    0% {
        r: ${dotData.radius};
        stroke-width: 24;
    }
    95% {
        r: ${hoverRadius * 2 + 20};
        stroke-width: 30;
    }
    100% {
        r: ${hoverRadius * 2 + 15};
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

  const renderSpeech = () => {
    const loro = new SpeechSynthesisUtterance();
    loro.text = dotData.title;
    loro.volume = 1;
    loro.rate = 1;
    loro.pitch = 1;
    loro.voice = speechSynthesis.getVoices().find(function (voice) {
      return voice.name === 'Monica';
    });

    return speechSynthesis.speak(loro);
  };

  const renderText = () => {
    if (isActive) {
      return (
        <text
          x={dotData.position.x}
          y={dotData.position.y}
          textAnchor="middle"
          stroke="#51c5cf"
          strokeWidth="1px"
        >
          {dotData.title}
        </text>
      );
    }
  };

  return (
    <g>
      <CircleStyled
        key={dotData.id}
        r={dotData.radius}
        cx={dotData.position.x + dotData.radius}
        cy={dotData.position.y + dotData.radius}
        stroke="white"
        strokeWidth={`24px`}
        className="lalala"
        onMouseEnter={() => setIsActive(!isActive)}
        onMouseLeave={() => setIsActive(!isActive)}
        onClick={() => renderSpeech()}
      />
      {renderText()}
    </g>
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
