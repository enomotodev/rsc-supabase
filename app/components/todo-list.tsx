import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/database.types'
import TodoItems from '@/app/components/todo-items'

export default async function TodoList() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies
  })
  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true })
  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItems key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
