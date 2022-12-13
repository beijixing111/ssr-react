

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import createStoreInstance from './store';
import { routesConfig } from './routes';
import { Helmet } from 'react-helmet';
import Npp from './Npp';
import StyleContext from 'isomorphic-style-loader/StyleContext'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist/public'));

app.get('*', (req, res) => {
  
  const store = createStoreInstance();

  const promises = routesConfig?.map(route => {
    const component = route?.component;
    if(route?.path === req?.url && component.getInitialData) {
      return component?.getInitialData(store);
    } else {
      return null;
    }
  })

  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  Promise.all(promises).then(() => {

    const preloadedState = store.getState();
    // const content = ReactDOMServer.renderToString(<App target="node" store={store} location={req.url} />)
    // context={context} v6版本已不支持 

    const content = ReactDOMServer.renderToString(
      <StyleContext.Provider value={{ insertCss }}> 
        <Npp location={req.url} store={store} />
      </StyleContext.Provider>
    );
    // console.log(content);
    const helmet = Helmet.renderStatic();
    const styleCss = [...css].join('');
    // console.log('styleCss:', styleCss);
    // console.log([...css]);
    const html = `
      <!doctype html>
      <html>
        <head>
          ${helmet?.title?.toString()}
          ${helmet?.meta?.toString()}
          <style>${styleCss}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__PRELOAD_STATE__ = ${JSON.stringify(preloadedState)};
          </script>
          <script src="bundle_client.js"></script>
        </body>
      </html>
    `;
    res.send(html);
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
