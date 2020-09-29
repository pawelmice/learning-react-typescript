import React from "react";
import { ITodoListItem } from "./types";
import { completeAll, createList, removeCompleted } from "./actions";

const TodoListItem: React.FC<ITodoListItem> = (props): JSX.Element => {
  return (
    <ol>
      {props.todos.map((t, i) => {
        return (
          <li
            key={t.text}
            style={t.done ? { textDecoration: "line-through" } : undefined}
          >
            <input
              type="checkbox"
              onClick={() => props.toggle(createList(props.todos, i))}
              checked={t.done}
            />
            {t.text}
          </li>
        );
      })}
      <button onClick={() => props.toggle(completeAll(props.todos))}>
        Complete all
      </button>
      <button onClick={() => props.toggle(removeCompleted(props.todos))}>
        Remove completed
      </button>
    </ol>
  );
};

export default TodoListItem;
