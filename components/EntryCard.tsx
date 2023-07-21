interface EntryCardProp {
  entry: {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    content: string
  }
}

const EntryCard = ({ entry }: EntryCardProp) => {
  const date = new Date(entry.createdAt).toDateString()

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">summary</div>
      <div className="p-4 sm:px-6">mood</div>
    </div>
  )
}

export default EntryCard
