'use client'

import { useState } from 'react'

import { askQuestion } from '@/utils/api'

import Spinner from './Spinner'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

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
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 w-full max-w-md rounded-lg bg-white p-4 shadow-md transition-all duration-300"
    >
      <div className="flex items-center rounded-lg border border-gray-300 px-4 py-2">
        <input
          disabled={loading}
          type="text"
          placeholder="Ask a question"
          value={value}
          onChange={handleChange}
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-gray-500"
        />
        <button
          disabled={loading}
          type="submit"
          className={`ml-4 rounded-lg px-4 py-2 text-lg text-white transition-colors duration-300 ${
            loading
              ? 'cursor-not-allowed bg-gray-400'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </div>
      {loading && (
        <div className="mt-4 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {response && (
        <div className="mt-4 animate-fade-in text-center text-lg">
          {response}
        </div>
      )}
    </form>
  )
}

export default Question
