'use server'

import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

// All actions that are being run on the server

export const completeTodo = async (id: string) => {
    await db.todo.update({
        where: {id},
        data: {
            completed: true,
        }
    })
    revalidatePath('/todos')
}

export const reactivateTodo = async (id: string) => {
    await db.todo.update({
        where: {id},
        data: {
            completed: false,
        }
    })
    revalidatePath('/todos')
}

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('todo')
        }
    })
    revalidatePath('/todos')
}