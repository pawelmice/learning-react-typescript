export type Todo = Readonly<{
  text: string;
  done: boolean;
}>;

export type CompletedTodo = Todo & {
  readonly done: true;
};

export interface ITodoListItem {
  todos: Todo[];
  toggle(todos: Todo[]): void;
}
