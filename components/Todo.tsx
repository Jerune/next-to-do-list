'use client'

import { TodoProps } from "@/app/types";
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

export default function Todo({ todo }: TodoProps) {
  const [isPending, startTransition] = useTransition()  
  
  return (
      <div className={`border border-black/20 cursor-pointer ${todo.completed && 'line-through text-gray-900'}`} onClick={() => startTransition(() => completeTodo(todo.id))}>{ todo.content }</div>
    )
  }