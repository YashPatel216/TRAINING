import react from 'react';
import { useState,useEffect } from 'react';
function Effect()
{
    const [count,setCount]=useState(0);
    useEffect(()=>
    {
        document.title=`Count is ${count}`;
         return()=>{
        document.title= "this is a count example";
   }
    }, [count]);       
     return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Effect;
