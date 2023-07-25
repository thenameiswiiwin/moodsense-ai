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
  const analysisData = [
    { name: 'Summary', value: '' },
    { name: 'Subject', value: '' },
    { name: 'Mood', value: '' },
    { name: 'Negative', value: 'False' },
  ]

  if (entry) {
    return (
      <div className="grid h-full w-full grid-cols-3 overflow-hidden">
        <div className="col-span-2">
          <Editor entry={entry} />
        </div>
        <div className="border-l border-black/10">
          <div className="bg-blue-300 px-6 py-10">
            <h2 className="text-2xl">Analysis</h2>
          </div>
          <div>
            <ul>
              {analysisData.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between border-y border-black/10 px-6 py-4"
                >
                  <span className="text-lg font-semibold">{item.name}</span>
                  <span>{item.value}</span>
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
