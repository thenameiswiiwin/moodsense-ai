'use client'

import React, { useState } from 'react'
import { useAutosave } from 'react-autosave'

import { updateEntry } from '@/utils/api'

interface EntryProp {
  id: string
  content: string
  analysis?: {
    mood: string
    summary: string
    color: string
    subject: string
    negative: boolean
  } | null
}

const Editor = ({ entry }: { entry: EntryProp }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis || {}
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

  return (
    <div className="relative grid h-full w-full grid-cols-1 gap-0 overflow-hidden md:grid-cols-5">
      <div className="md:absolute md:left-0 md:top-0 md:p-2">
        {isLoading ? (
          <div className="animate-spin flex h-[16px] w-[16px] items-center rounded-full bg-green-500" />
        ) : (
          <div className="h-[16px] w-[16px] rounded-full bg-green-500" />
        )}
      </div>
      <textarea
        className="h-full w-full p-8 text-xl outline-none md:col-span-3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="border-t border-black/10 md:col-span-2 md:border-l md:border-black/10">
        <div
          className={`md: p-6 py-10${isLoading ? 'animate-pulse' : ''}`}
          style={{ backgroundColor: color }}
        >
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className={`flex flex-col items-start justify-between border-y border-black/10 px-4 py-6 md:flex-row md:items-center ${
                  isLoading ? 'animate-pulse' : ''
                }`}
              >
                <span
                  className={`text-lg font-semibold md:flex-1 ${
                    isLoading ? '' : 'md:mb-0'
                  }`}
                >
                  {item.name}
                </span>
                <span className="md:ml-2 md:flex-1 md:text-end">
                  {isLoading ? '...' : item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
