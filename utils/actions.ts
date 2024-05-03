'use server'

import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

// All actions that are being run on the server

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('todo')
        }
    })
    revalidatePath('/todos')
}