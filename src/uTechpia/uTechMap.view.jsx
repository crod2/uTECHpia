import React from 'react';
import { NavLink } from 'react-router-dom';
import SpeechFunction from '../utils/speechSynthesisUtterance';
import { WrapperContainerStyled, TitleStyled } from './uTechMap.view.styled';

const UTechMapView = () => {
  const renderSpeech = textToRead => {
    return new SpeechFunction(textToRead);
  };

  return (
    <WrapperContainerStyled>
      <TitleStyled
        onClick={() => {
          renderSpeech('iuutecpia');
        }}
      >
        <NavLink to="/utechstory" style={{ textDecoration: 'none', color: '#51b7c4' }}>
          &lt;u<span style={{ fontWeight: 800, color: '#FFFFFF' }}>TECH</span>pia&gt;
        </NavLink>
      </TitleStyled>
    </WrapperContainerStyled>
  );
};

export default UTechMapView;
