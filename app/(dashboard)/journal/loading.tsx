'use client'

import { useEffect, useState } from 'react'

const HomeLoading = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`animate-spin h-12 w-12 rounded-full border-t-4 border-blue-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      />
    </div>
  )
}

export default HomeLoading
