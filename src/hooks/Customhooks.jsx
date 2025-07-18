import React from "react";
import { useState } from "react";
import useToggle from './useToggle.jsx'; 
function Customhooks(){
    const[value,toggleValue]=useToggle(false);

    console.log("val",value)

return(<div>
    <button onClick={()=>toggleValue(!value)}>toggle</button>
    <button onClick={()=>toggleValue(false)}>Hide</button>
    <button onClick={()=>toggleValue(true)}>show</button>

    {
        value?<h2>This is a Custom hook example</h2>:null
    }
    </div>
)}

export default Customhooks;