import React from "react";
import { hydrateRoot } from "react-dom/client";
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from './App';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  // console.log('removeCss', removeCss);
  return () => removeCss.forEach(dispose => dispose())
}

// console.log('insertCss', insertCss());

hydrateRoot(
  document.querySelector('#root'),  
  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>
);



