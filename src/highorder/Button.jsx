import withCount from "./WithCount.jsx";
const  Button =({count,Increment})=>{
    return(
        <button onClick={Increment}>Click {count} times</button>
    );
}
export default withCount(Button);