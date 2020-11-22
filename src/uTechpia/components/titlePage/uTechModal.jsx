import React from 'react';
import SpeechFunction from '../../../utils/speechSynthesisUtterance';

import { Wrapper, ModalStyled, ButtonStyled } from './uTechTitle.component.styled.js';

const UTechModal = ({ onClose, show }) => {
  const uTechStory =
    'Este proyecto presenta algunas de las posibilidades que nos ofrecería la tecnología actual de escoger aplicarle la perspectiva feminista. Está inspirado en los debates que se han generado en el curso "Entendiendo el capitalismo digital y construyendo una crítica feminista" impartido por Marga Padilla + Otro Tiempo. Es la historia de la distopía que generaría el futurible colapso de las redes tecnológicas tal cual las conocemos, ligadas profundamente a los intereses del mercado. Quizás pueda ser, a través de la reflexión, de la crítica, del análisis... algo distinto. Nuestra historia.';

  const renderSpeech = () => {
    return new SpeechFunction(uTechStory);
  };

  return (
    <Wrapper>
      <ButtonStyled
        onClick={() => {
          onClose();
        }}
      >
        &lt;
      </ButtonStyled>
      <ModalStyled
        onMouseOver={() => {
          renderSpeech();
        }}
      >
        {uTechStory}
      </ModalStyled>
    </Wrapper>
  );
};

export default UTechModal;
