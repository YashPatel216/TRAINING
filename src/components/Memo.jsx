import React from "react";
import {useState ,useMemo} from "react";

function Memo()
{
    const [addition,setAddition] = useState(0);
    const [subtraction,setSubtraction] = useState(100);
    const Multiplication = useMemo(function multiply()
    {
        console.log("Multiplication is called");
        return addition * 10;
    },[addition])
    return(
        <div>
            <b><h2>Memo Example</h2></b>
            <h2>Multiplication is : {Multiplication}</h2>
            <button onClick={()=>setAddition(addition + 1)}>Addition</button>
            <span>Addition: {addition}</span>
            <button onClick={()=>setSubtraction(subtraction - 1)}>Subtraction</button>
            <span>Subtraction: {subtraction}</span>
        </div>
    )
}
export default Memo;