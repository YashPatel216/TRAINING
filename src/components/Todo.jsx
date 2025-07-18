import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import "../app.css";
function TodoApp() {
    let [todolist,settodolist] = useState([]);

    let saveToDOList = (event) => {
    let todoname= event.target.todoname.value;
    if(!todolist.includes(todoname)){
        let finaltodolist =[...todolist, todoname];
        settodolist(finaltodolist);
    }
    else{
        alert("Task alreay exists");
    }
    event.preventDefault();
    }
    let list =todolist.map((value, index)=> {
        return(
             <TodoListItem value={value} key={index} indexNumber={index} 
             todolist={todolist} 
             settodolist={settodolist}
             />
        )
    })
    return (
    <div style={{ padding: 20 }}>
        <h2>Todo List</h2>
        <form onSubmit={saveToDOList}>
        <input type="text" name="todoname" placeholder="Add a new task" />
        <button>Save</button>
        <ul>{list}</ul>
        </form>

    </div>
  );
}
export default TodoApp;

function TodoListItem({value,indexNumber,todolist,settodolist}) {
    let [status, setStatus] = useState(false);
    let deleterow =() => {
        let finalData = todolist.filter((v, i) => i !== indexNumber)
        settodolist(finalData);
    }
    let checkstatus = () => {
        setStatus(!status);
        
    }
    return(
    <li className= {(status)? 'completetodo':''}onClick={checkstatus}>{indexNumber + 1}{value}<span onClick={deleterow}>&times;</span></li>
    )
}