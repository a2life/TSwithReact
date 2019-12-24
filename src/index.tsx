// @ts-ignore
import React from 'react';
import ReactDom from 'react-dom';
 import 'ts-polyfill';
 import 'url-search-params-polyfill';  // ts-polyfill does not include urlSearchParams(?)

// import "regenerator-runtime/runtime";

import App from './components/App'

ReactDom.render(<App />, document.getElementById('root'));