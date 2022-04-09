import React, { useState} from 'react';


function TodoForm(props){ 
    const { addTodo } = props;



// STATE
    const [value, setValue] = useState("");

// ACTIONS
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return; // ! means if the value is falsy, then...
        addTodo(value);
        setValue("");
 }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="Add new Todo item" onChange={(event) => setValue(event.target.value)}
            />;
        </form>
    );
};


export default TodoForm;