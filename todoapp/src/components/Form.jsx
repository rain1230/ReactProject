import { useState } from "react";
import styles from './form.module.css';
export default function Form({ todos, setTodos }){
    // const [todo,setTodo]=useState("");//Single todo string
    const [todo,setTodo]=useState({name:"", done:false});
    // const [todos,setTodos]=useState([]);//Multiple Todos list array
    function handleSubmit(e)
    {
        e.preventDefault();// helps to prevent value from removing while clicking button or refresh
        setTodos([...todos, todo]);//retrain previous data
        // console.log(todos)
        setTodo({name:"", done:false});
    }
    return (<form  className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input 
            className={styles.modernInput }
            
           
            onChange={(e)=>setTodo({name:e.target.value, done:false})}
            value={todo.name}
            type="text"
            placeholder="Please enter item"
            />
            <button className={styles.modernButton} type="submit">Add</button>
            </div>
            
        </form>
    );
}