import styles from "./todoitem.module.css";
export default function TodoItem({item,todos,setTodos}){
    function handelDelete(item){
        console.log("Are you sure, you wat to delete this", item);
        setTodos(todos.filter((todo)=>todo!==item))
        
    }
    function handleClick(name){
        // console.log("clicked item",name);
        const newArray=todos.map((todo)=>todo.name===name?{...todo,done: !todo.done}:todo)
        setTodos(newArray)
        // console.log("clicked item",name);
    }
    const className=item.done?styles.completed:""
return <div className={styles.item}>
    <div className={styles.itemName}>
        <span className={className} onClick={()=>handleClick(item.name)}>
        {item.name}
        </span>
    
    <span>
        <button  onClick={()=>handelDelete(item.name)} 
        className={styles.deleteButton}>x</button>
    </span>
    </div>
    
    <hr className={styles.line}/>
    </div>
    
    
    
    
    
}