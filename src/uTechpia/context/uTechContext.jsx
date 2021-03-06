import React, { createContext, useState, useEffect, useLayoutEffect } from 'react';
import dataJson from '../../utils/data';
import { getDirectRuleOfThree } from '../../utils/usefulFunctions';

export const ContextUTech = createContext();

export const ProviderUTech = props => {
  const [data, setData] = useState(dataJson);
  const [screenSize, setScreenSize] = useState({
    width: 1920,
    height: 1080,
  });

  const [selectedDot, setSelectedDot] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);

  useLayoutEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    setScreenSize({
      width: screenHeight,
      height: screenWidth,
    });

    const responsiveData = data.map(dot => {
      return {
        ...dot,
        radius: getDirectRuleOfThree(1920, screenWidth, dot.radius),
        position: {
          x: getDirectRuleOfThree(1920, screenWidth, dot.position.x),
          y: getDirectRuleOfThree(1040, screenHeight, dot.position.y),
        },
      };
    });
    setData(responsiveData);
  }, []);

  const [description, setDescription] = useState('');

  return (
    <ContextUTech.Provider
      value={{
        data,
        setData,
        screenSize,
        setScreenSize,
        selectedDot,
        setSelectedDot,
        visibleLines,
        setVisibleLines,
        description,
        setDescription,
      }}
    >
      {props.children}
    </ContextUTech.Provider>
  );
};
