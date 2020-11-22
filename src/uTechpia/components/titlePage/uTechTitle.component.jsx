import React, { useState } from 'react';
import { withRouter } from 'react-router';

import SpeechFunction from '../../../utils/speechSynthesisUtterance';
import UTechModal from './uTechModal';

import { Wrapper, TitleStyled, ButtonStyled } from './uTechTitle.component.styled.js';

const UTechTitle = props => {
  const [show, setShow] = useState(false);

  const renderSpeech = () => {
    return new SpeechFunction('iuutecpia');
  };

  const handleModal = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <UTechModal onClose={handleModal} show={show} />
      ) : (
        <Wrapper>
          <TitleStyled
            onMouseOver={() => {
              renderSpeech();
            }}
            onClick={() => {
              handleModal();
            }}
          >
            &lt;u<span style={{ fontWeight: 800, color: '#FFFFFF' }}>TECH</span>pia&gt;
          </TitleStyled>
          <ButtonStyled onClick={() => props.history.push('/utechmap')}>&gt;</ButtonStyled>
        </Wrapper>
      )}
    </>
  );
};
export default withRouter(UTechTitle);
