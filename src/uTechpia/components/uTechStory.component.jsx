import React from 'react';
import { NavLink } from 'react-router-dom';

import { WrapperStyled, WrapperContainerStyled } from '../../sharedStyles.styled.js';

const UTechStory = () => {
  const story =
    'Este proyecto presenta algunas de las posibilidades que nos ofrecería la tecnología actual de escoger aplicarle la perspectiva feminista. Está inspirado en los debates que se han generado en el curso "Entendiendo el capitalismo digital y construyendo una crítica feminista" impartido por Marga Padilla + Otro Tiempo. Es la historia de la distopía que generaría el futurible colapso de las redes tecnológicas tal cual las conocemos, ligadas profundamente a los intereses del mercado. Quizás pueda ser, a través de la reflexión, de la crítica, del análisis, algo distinto. Nuestra historia.';
  return (
    <WrapperStyled>
      <WrapperContainerStyled>
        <h1>
          <NavLink to="/utechmap">{story}</NavLink>
        </h1>
      </WrapperContainerStyled>
    </WrapperStyled>
  );
};

export default UTechStory;
