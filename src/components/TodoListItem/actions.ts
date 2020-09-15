import { CompletedTodo, Todo } from "./types";
import * as immer from "immer";

export const toggleTodo = (todo: Todo): Todo => {
  return {
    text: todo.text,
    done: !todo.done,
  };
};

export const createList = (todos: Todo[], i: number): Todo[] => {
  return immer.produce(todos, (t) => {
    t[i] = toggleTodo(todos[i]);
  });
};

export const completeAll = (todos: Todo[]): CompletedTodo[] => {
  return todos.map((t) => {
    return { text: t.text, done: true };
  });
};

export const removeCompleted = (todos: Todo[]): Todo[] => {
  return todos.filter((t) => !t.done);
};
