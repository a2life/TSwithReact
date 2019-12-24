import React from 'react';
import '../styles/index.scss';

const App=(prop:{value:string})=>{

    const three=["1","2","3","4"].find((a)=>(a==="3"));  // check if array.find work
   return  (

        <div>
            <h1>Hello world!!</h1>
            <p>{prop.value}</p>
            <p>String based on array.prototype.find: {three?'found':'not found'}</p>
            <p>If you see this in IE 11, then Promise supported!</p>
        </div>

    )

}




     ;

export default App;