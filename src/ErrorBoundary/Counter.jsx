import React , {useState} from "react";
function Counter({ title }) {
    const [count ,setCount] =useState(0);
    if(count > 5 )
        {
            throw new Error("Counter is greater than 5");
        }   
    return(
    <div>
        <div> Counter {title}</div>
        <div> {count} </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}
export default Counter;