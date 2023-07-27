import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkID()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      sentimentScore: true,
    },
  })

  const sum = analysis.reduce((all, current) => all + current.sentimentScore, 0)
  const avgSentimentScore = Math.round(sum / analysis.length)
  return { analysis, avgSentimentScore }
}

const History = async () => {
  const { avg, analysis } = await getData()

  return <div>History: {avg}</div>
}

export default History
