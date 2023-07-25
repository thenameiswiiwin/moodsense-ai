'use client'

import { useState } from 'react'
import { useAutosave } from 'react-autosave'

import { updateEntry } from '@/utils/api'

interface EntryProp {
  id: string
  content: string
}

const Editor = ({ entry }: { entry: EntryProp }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      setIsLoading(false)
    },
  })

  return (
    <div className="h-full w-full">
      {isLoading && <div>...Loading</div>}
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
