import React from 'react';
import '../styles/index.scss'
function getValue(){
    return Promise.resolve('this is value');
}
const App=()=>{
    const [value,setValue]=React.useState('');
    getValue().then(d=>{console.log(d); setValue(d)}); //check if Promise work
    console.log("this is a pen".includes('pen'));  //check if array.includes work
    const three=["1","2","3","4"].find((a)=>(a==="3"));  // check if array.find work
    const searchParamString = location.search;   // check if URLSearchPrams work
    const searchParam=new URLSearchParams(searchParamString);
    for (const [key,value] of searchParam){
        console.log('key:',key,' value:',value)
    }
   return  (

        <div>
            <h1>Hello world!!</h1>
            <p>{value}</p>
            <p>String based on array.prototype.find: {three?'found':'not found'}</p>

        </div>

    )

}




     ;

export default App;