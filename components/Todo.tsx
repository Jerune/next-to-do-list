import { TodoProps } from "@/app/types";

export default function Todo({ todo }: TodoProps) {
    return (
      <div>{ todo.content }</div>
    )
  }