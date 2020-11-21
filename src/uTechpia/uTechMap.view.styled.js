import React from 'react';
import styled, { keyframes } from 'styled-components';

export const WrapperContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
WrapperContainerStyled.displayName = 'WrapperContainerStyled';

const typewriterEffect = keyframes`
  from {
    width: 0;
  }

  to {
    width: 6em;
  }

  @media only screen and (max-width: 768px) {
    width: 3em;
  }
`;

const blinkCursorEffect = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }

  to {
    border-right-color: transparent;
  }
  `;

export const TitleStyled = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-weight: 300;
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-align: left;
  width: 6em;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 100px;
  white-space: nowrap;
  animation: ${typewriterEffect} 3s steps(44) 1s 1 normal both,
    ${blinkCursorEffect} 350ms steps(44) infinite normal;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    width: 3em;
  }
`;

TitleStyled.displayName = 'TitleStyled';
