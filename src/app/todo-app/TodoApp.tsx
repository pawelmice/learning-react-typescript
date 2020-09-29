import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoListItem from "./components/TodoListItem/TodoListItem";
import { Todo } from "./components/TodoListItem/types";

const App: React.FC = () => {
  const [Todos, setTodos] = useState([] as Todo[]);
  const handleAddTodo = (todo: Todo): void => {
    setTodos([...Todos, todo]);
  };
  const handleToggleTodo = (todos: Todo[]): void => {
    setTodos(todos);
  };
  return (
    <div className="App">
      <TodoInput addTodo={handleAddTodo} />
      <TodoListItem todos={Todos} toggle={handleToggleTodo} />
    </div>
  );
};

export default App;
