import React from "react";
 
function TodoItem(props) { // props is an object that passes on infro from parent component to child
    const { todo } = props; // Unlock the todo from the props object

    return <div>{todo}</div>;
}

export default TodoItem;