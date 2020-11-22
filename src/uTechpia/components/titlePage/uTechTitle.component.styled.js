import React from 'react';
import styled, { keyframes } from 'styled-components';

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

export const Wrapper = styled.div`
  align-items: center;
  bottom: 77px;
  display: flex;
  left: 10px;
  position: absolute;
`;

Wrapper.displayName = 'Wrapper';

export const TitleStyled = styled.h1`
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  color: #51b7c4;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-size: 100px;
  font-weight: 300;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
  width: 6em;
  animation: ${typewriterEffect} 3s steps(44) 1s 1 normal both,
    ${blinkCursorEffect} 350ms steps(44) infinite normal;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    width: 3em;
  }
`;

TitleStyled.displayName = 'TitleStyled';

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: #a3f5cf;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-size: 100px;
  font-weight: 300;
  padding-right: 20px;
  text-align: left;
`;

ButtonStyled.displayName = 'ButtonStyled';

export const ModalStyled = styled.p`
  color: #fff;
  font-size: 15px;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 50%;
`;
ModalStyled.displayName = 'ModalStyled';
