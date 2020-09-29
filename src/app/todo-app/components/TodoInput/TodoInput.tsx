import React, { useState } from "react";
import { Todo } from "../TodoListItem/types";

interface ITodoInput {
  addTodo(todo: Todo): void;
}

const TodoInput: React.FC<ITodoInput> = (props): JSX.Element => {
  const [Text, setText] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };
  const handleSubmit = (): void => {
    props.addTodo({
      text: Text,
      done: false,
    });
    setText("");
  };
  return (
    <div>
      <input value={Text} onChange={handleInput} />
      <button onClick={() => handleSubmit()}>Add</button>
    </div>
  );
};

export default TodoInput;
