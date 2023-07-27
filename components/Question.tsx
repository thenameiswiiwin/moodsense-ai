'use client'

import { useState } from 'react'

import { askQuestion } from '@/utils/api'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={loading}
        type="text"
        placeholder="Ask a question"
        onChange={handleChange}
        className="rounded-lg border border-black/20 px-4 py-2 text-lg"
      />
      <button
        disabled={loading}
        type="submit"
        className="ml-2 rounded-lg bg-blue-400 px-4 py-2 text-lg"
      >
        Ask
      </button>
      {loading && <div>...Loading</div>}
      {response && <div className="my-4 text-lg">{response}</div>}
    </form>
  )
}

export default Question
