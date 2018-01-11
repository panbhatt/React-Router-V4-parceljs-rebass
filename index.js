import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app' ;
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`




ReactDOM.render(<App/>, document.getElementById("root"));