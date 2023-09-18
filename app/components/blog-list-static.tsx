import Link from 'next/link'
import type { Database } from '@/database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.url}/rest/v1//blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    // cache: 'no-store',
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

export default async function BlogListStatic() {
  const blogs = await fetchBlogs()

  return (
    <div>
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            <Link href={`/blogs/${blog.id}`} prefetch={false}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}