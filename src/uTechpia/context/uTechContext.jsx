import React, { createContext, useState } from 'react';

export const ContextUTech = createContext();

export const ProviderUTech = props => {
  const [prueba, setPrueba] = useState('');
  return (
    <ContextUTech.Provider value={{ prueba, setPrueba }}>{props.children}</ContextUTech.Provider>
  );
};
