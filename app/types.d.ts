type Todo = {
  id: string;
  content: string;
  completed: boolean;
}

export type TodoProps = {
    todo: Todo;
}

export type TodoListProps = {
    todos: Todo[]
}