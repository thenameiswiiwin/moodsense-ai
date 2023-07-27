interface EntryCardProp {
  entry: {
    createdAt: Date
    analysis: {
      mood: string
      summary: string
    } | null
  }
}

const EntryCard: React.FC<EntryCardProp> = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow transition-transform hover:scale-105">
      <h2 className="grow truncate bg-gray-100 px-4 py-5 text-xl font-bold text-gray-800 sm:px-6">
        {date}
      </h2>
      {entry.analysis ? (
        <>
          <div className="grow truncate px-4 py-5 sm:p-6">
            <h3 className="text-lg font-semibold text-indigo-600">Summary</h3>
            <p className="truncate leading-relaxed text-gray-700">
              {entry.analysis.summary}
            </p>
          </div>
          <div className="grow truncate p-4 sm:px-6">
            <h3 className="text-lg font-semibold text-purple-600">Mood</h3>
            <p className="truncate leading-relaxed text-gray-700">
              {entry.analysis.mood}
            </p>
          </div>
        </>
      ) : (
        <div className="grow truncate px-4 py-5 text-gray-700 sm:p-6">
          No analysis available.
        </div>
      )}
    </div>
  )
}

export default EntryCard
