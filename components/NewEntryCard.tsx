'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { createNewEntry } from '@/utils/api'

import Spinner from './Spinner'

const NewEntryCard = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setIsClicked(true)
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
    setLoading(false)
  }

  return (
    <div
      className={`cursor-pointer overflow-hidden rounded-lg bg-white shadow ${
        isClicked ? 'animate-pulse' : ''
      } shadow transition-all hover:bg-white/10 hover:duration-300`}
      onClick={handleClick}
    >
      <div className="flex h-full items-center justify-center px-4 py-5 sm:p-6">
        {loading ? <Spinner /> : <span className="text-3xl">New Entry</span>}
      </div>
    </div>
  )
}

export default NewEntryCard
