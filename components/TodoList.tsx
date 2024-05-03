import { TodoListProps } from "@/app/types";
import Todo from "./Todo";

export default function TodoList({ todos }: TodoListProps) {
    return (
      <div>
        {todos.map((todo, index) => <Todo key={todo.id} todo={todo}/>)}
      </div>
    )
  }