import React from "react";

// CSS

import "./TodoItem.css";
 
function TodoItem(props) { // props is an object that passes on info from parent component to child
    const { todo, index, completeTodo, removeTodo } = props; // Unlock the todo from the props object

    return ( // ` injects a JavaScript value
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}> 
            {todo.text} 
            <div> 
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;