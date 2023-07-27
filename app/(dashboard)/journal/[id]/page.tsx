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

  if (entry) {
    return (
      <div className="h-full w-full">
        <Editor entry={entry} />
      </div>
    )
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-blue-500" />
    </div>
  )
}

export default EntryPage
