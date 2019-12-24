// @ts-ignore
import React from 'react';
import ReactDom from 'react-dom';
import 'tslib';
 import 'ts-polyfill';
 import 'url-search-params-polyfill';  // ts-polyfill does not include urlSearchParams(?)
// import 'core-js';
// import "regenerator-runtime/runtime";

import App from './components/App'
const searchParamString = location.search;   // check if URLSearchPrams work
const searchParam=new URLSearchParams(searchParamString);

console.log('array.prototype.includes supported ',"this is a pen".includes('pen'));  //check if array.includes work
console.log('urlparams supported:');
for (const [key,value] of searchParam){
 console.log('key:',key,' value:',value)
}
function getValue(){
 return Promise.resolve('this is value');
}




getValue().then((p)=>
{return ReactDom.render(<App value={p}/>, document.getElementById('root'))}

);