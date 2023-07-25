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
  if (entry) {
    return (
      <div className="h-full w-full">
        <Editor entry={entry} />
      </div>
    )
  }
  return <div>Loading...</div>
}

export default EntryPage
