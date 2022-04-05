import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() { // Parent component

  // STATE

  const [todos, setTodos] = useState(
    ["Learn React",
      "Tell all my fiends to learn React",
      "Get them to tell 5 friends about React",
    "Start a pyramid scheme"]
  )

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} />
      ))};
      
    </div>
  );
}

export default App;
