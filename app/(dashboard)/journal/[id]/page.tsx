import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id: string) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

interface EntryPageProp {
  params: {
    id: string
  }
}

const EntryPage = async ({ params }: EntryPageProp) => {
  const entry = await getEntry(params.id)
  const { mood, summary, color, subject, negative } = entry?.analysis || {}
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]

  if (entry) {
    return (
      <div className="grid h-full w-full grid-cols-3 overflow-hidden">
        <div className="col-span-2">
          <Editor entry={entry} />
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
  return <div>Loading...</div>
}

export default EntryPage
