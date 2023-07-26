'use client'

import { useState } from 'react'
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

  const { mood, summary, color, subject, negative } = entry?.analysis || {}
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
      const updated = await updateEntry(entry.id, _value)
      setIsLoading(false)
    },
  })

  return (
    <div className="grid h-full w-full grid-cols-3 overflow-hidden">
      <div className="col-span-2">
        {isLoading && <div>...Loading</div>}
        <textarea
          className="h-full w-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/10">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between border-y border-black/10 px-2 py-4"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="text-end">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
