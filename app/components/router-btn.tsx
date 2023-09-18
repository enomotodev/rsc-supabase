'use client'

import { useRouter } from 'next/navigation'

export default function RouterBtn({ destination = '' } : { destination?: string }) {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${destination}`)
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-indigo-600 px-3 py-2 font-medium text-white hover:bg-indigo-700"
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )

}
