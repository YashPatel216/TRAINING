import React, { useState } from "react";
const withCount = (WrapperComponent) => {
    const WithCount  = () => {
         const [count, setCount] = useState(0);
        const Increment = () => {
            setCount(count + 1);         
       }
        return <WrapperComponent count={count} Increment={Increment} />
    }
    return WithCount; 
}
export default withCount;