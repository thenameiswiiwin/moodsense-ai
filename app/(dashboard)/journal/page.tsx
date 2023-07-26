import Link from 'next/link'

import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Question from '@/components/Question'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className="h-full bg-zinc-100/50 px-6 py-8">
      <h1 className="mb-12 text-4xl">Journals</h1>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
