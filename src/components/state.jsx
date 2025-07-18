import react from 'react';
import { useState } from 'react';
function ColorChange()
{
    const [color,setColor]=useState("")
    return(
        <>
        <button onClick={()=> setColor("red")}>Red</button>
        <button onClick={()=> setColor("blue")}>Blue</button>
        <button onClick={()=> setColor("Green")}>Green</button>
        <h2>Color is {color}</h2>
        </>
    )
}
export default ColorChange;