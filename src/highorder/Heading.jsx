import React ,{useState} from "react";
import withCount from "./WithCount.jsx";
const Heading = ({count,Increment}) =>{
    return (
        <h2 onMouseOver={Increment}> Higher Order Component {count}</h2>
    );
}
export default withCount(Heading);