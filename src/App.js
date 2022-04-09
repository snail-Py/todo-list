import { useState } from "react";

// COMPONENTS

import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

// CSS

import "./App.css";

function App() { // Parent component

  // STATE

  const [todos, setTodos] = useState(
    [
      { text: "Learn about React", isCompleted: false },
      { text: "Meet friends for lunch", isCompleted: false },
      { text: "Build really cool REACT apps", isCompleted: false }

    ]);

  // ACTIONS

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }]; // ... is a spread operator - add each element in a new array
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos]  // just looping through each copy of the array without updating
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos]; // create a new copy in memory and don't try to update the origina;
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className = "app"> 
      <div className="todo-list">
        
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;
