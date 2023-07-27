import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { qa } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

export const POST = async (request: NextRequest) => {
  const { question } = await request.json()
  const user = await getUserByClerkID()

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      content: true,
      createdAt: true,
    },
  })

  const answer = await qa(question, entries)

  return NextResponse.json({ data: answer })
}
