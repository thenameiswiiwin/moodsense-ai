'use client'

import { useState } from 'react'

interface EntryProp {
  content: string
}

const Editor = ({ entry }: { entry: EntryProp }) => {
  const [value, setValue] = useState(entry.content)

  return (
    <div className="h-full w-full">
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
