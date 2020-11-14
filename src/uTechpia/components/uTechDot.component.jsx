import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UTechDot = props => {
  const { dotData } = props;

  const [isHovered, setIsHovered] = useState(false);

  //   const CircleStyled = styled.circle`
  //     border: 24px solid white;
  //     &:hover {
  //         stroke-dasharray: 227;
  //     }
  //   `;

  return (
    // <CircleStyled
    <circle
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
