import React from "react";
function Prop(props)
{
    return(
        <>
        <h5> this is a props  example Color is {props.color}</h5>
        </>
    )
}
function Prop1(props)
{
    return(
        <>
        <Prop color="red"/>
     </>
    )
}
export default Prop1;