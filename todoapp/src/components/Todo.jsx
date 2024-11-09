import { useState } from "react";

import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
export default function Todo(){
    // const [todo,setTodo]=useState("");//Single todo string
    const [todos,setTodos]=useState([]);//Multiple Todos list array
    // function handleSubmit(e){
    //     e.preventDefault();// helps to prevent value from removing while clicking button or refresh
    //     setTodos([...todos, todo]);//retrain previous data
        // console.log(todos)
        // setTodo("");


        return (<div>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos}/>
      
        
    </div>
    )
}




     {/* <form onSubmit={handleSubmit}>

            <input 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo}
            type="text"
             
            />
            <button type="submit">Add</button>
        </form> */}
        
        {/* {todos.map((item)=> (
            
             <h3>{item}</h3>
        
        ))} */}
        
        {/* {console.log(todos)} */}
