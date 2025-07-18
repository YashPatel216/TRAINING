import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset ,incrementByAmount} from "../features/counter/counter"; 
function DisplayRedux() {
    const [amount, setAmount] = useState(0);
    const count= useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    function handleIncrementClick() {
        dispatch(increment());
    }
    function handleDecrementClick() {
        dispatch(decrement());
    }
    function handleResetClick() {
        dispatch(reset());
    }
    function handleIncrementAmtClcick() {
        dispatch(incrementByAmount(amount));
    }
    return (
        <div className="container">
            <button onClick={handleIncrementClick}>+</button>
            <p>Count: {count}</p>
            <button onClick={handleDecrementClick}>-</button> <br />    
            <button onClick={handleResetClick}>reset</button>
            <br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />
            <button onClick={handleIncrementAmtClcick}>Increment by Amount</button>
        </div>
    );
}
export default DisplayRedux;