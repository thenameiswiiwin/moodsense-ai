'use client'

import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question"
        onChange={handleChange}
        className="rounded-lg border border-black/20 px-4 py-2 text-lg"
      />
      <button
        type="submit"
        className="ml-2 rounded-lg bg-blue-400 px-4 py-2 text-lg"
      >
        Ask
      </button>
    </form>
  )
}

export default Question
