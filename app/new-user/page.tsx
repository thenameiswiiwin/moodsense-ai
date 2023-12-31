import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { prisma } from '@/utils/db'

const createNewUser = async () => {
  const user = await currentUser()

  if (!user) return
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
        name: user?.username as string,
      },
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return (
    <div className="flex h-screen items-center justify-center">Loading...</div>
  )
}

export default NewUser
